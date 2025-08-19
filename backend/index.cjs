const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();
const app = express();

// Встроенный модуль crypto в Node.js
const crypto = require('crypto');

app.use(helmet());
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API endpoints ---

// Получение списка картин
app.get('/api/paintings', async (req, res) => {
  try {
    const paintings = await prisma.painting.findMany();
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch paintings' });
  }
});

// Получение данных о конкретной картине
app.get('/api/paintings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const painting = await prisma.painting.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!painting) {
      return res.status(404).json({ error: 'Painting not found' });
    }
    
    res.json(painting);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch painting' });
  }
});

// Инициализация платежа через Robokassa (демо режим)
app.post('/api/payment/init', (req, res) => {
  try {
    const { 
      amount, 
      orderId, 
      description, 
      currency = 'RUB',
      culture = 'ru',
      isTest = 1  // 1 для тестового режима
    } = req.body;

    // Проверка обязательных параметров
    if (!amount || !orderId || !description) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const merchantLogin = process.env.ROBOKASSA_LOGIN;
    const password1 = process.env.ROBOKASSA_PASSWORD1;

    // Формируем строку для хеширования
    const signatureString = `${merchantLogin}:${amount}:${orderId}:${password1}`;
    
    // Вычисляем хеш (используем SHA256 как в вашем случае)
    const signature = crypto
      .createHash('sha256')
      .update(signatureString)
      .digest('hex');

    // Формируем URL для редиректа на Robokassa
    const redirectUrl = `https://auth.robokassa.ru/Merchant/Index.aspx?` +
      `MerchantLogin=${encodeURIComponent(merchantLogin)}&` +
      `OutSum=${encodeURIComponent(amount)}&` +
      `InvId=${encodeURIComponent(orderId)}&` +
      `Description=${encodeURIComponent(description)}&` +
      `SignatureValue=${signature}&` +
      `Culture=${culture}&` +
      `IsTest=${isTest}`;

    res.json({ 
      status: 'success',
      redirectUrl,
      orderId,
      amount
    });
  } catch (error) {
    console.error('Payment init error:', error);
    res.status(500).json({ error: 'Failed to initialize payment' });
  }
});

// Обработка результата оплаты (Result URL)
app.post('/api/payment/result', (req, res) => {
  try {
    const { OutSum, InvId, SignatureValue } = req.body;
    
    console.log(`Received payment result for order ${InvId}, amount: ${OutSum}`);
    
    const password2 = process.env.ROBOKASSA_PASSWORD2;
    
    // Формируем строку для хеширования
    const signatureString = `${OutSum}:${InvId}:${password2}`;
    
    // Вычисляем хеш для проверки
    const expectedSignature = crypto
      .createHash('sha256')
      .update(signatureString)
      .digest('hex');
    
    console.log(`Expected signature: ${expectedSignature}`);
    console.log(`Received signature: ${SignatureValue}`);
    
    // Проверяем подпись
    if (SignatureValue.toLowerCase() !== expectedSignature.toLowerCase()) {
      console.log('Invalid signature for payment result');
      return res.status(400).send('Invalid signature');
    }
    
    
    
    console.log(`Payment successful for order ${InvId}, amount: ${OutSum}`);
    
    // Отправляем ответ Robokassa
    res.send(`OK${InvId}`);
  } catch (error) {
    console.error('Payment result error:', error);
    res.status(500).send('Error processing payment result');
  }
});

// Обработка успешной оплаты (Success URL)
app.get('/api/payment/success', (req, res) => {
  try {
    const { OutSum, InvId } = req.query;
    
   
    
    res.json({ 
      status: 'success',
      message: 'Payment completed successfully',
      orderId: InvId,
      amount: OutSum
    });
  } catch (error) {
    console.error('Payment success error:', error);
    res.status(500).json({ error: 'Error processing payment success' });
  }
});


app.get('/api/payment/fail', (req, res) => {
  try {
    const { OutSum, InvId } = req.query;
    
    
    
    res.json({ 
      status: 'fail',
      message: 'Payment was cancelled',
      orderId: InvId,
      amount: OutSum
    });
  } catch (error) {
    console.error('Payment fail error:', error);
    res.status(500).json({ error: 'Error processing payment fail' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001')); 
 