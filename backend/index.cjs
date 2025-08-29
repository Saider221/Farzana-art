const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();
const app = express();

// Встроенный модуль crypto в Node.js
const crypto = require('crypto');

// Middleware для rate limiting
const { generalLimiter, paymentLimiter } = require('./middleware/rateLimiter');
// Middleware для логирования безопасности
const securityLogger = require('./middleware/securityLogger');

app.use(helmet());
// Определяем разрешенные origins в зависимости от среды
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://your-domain.vercel.app'] // Замените на ваш домен
  : ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Разрешаем запросы без origin (например, мобильные приложения, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json({ limit: '10mb' })); // Ограничение размера JSON
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Ограничение размера URL encoded данных

// Применяем security logger ко всем запросам
app.use(securityLogger);

// Применяем rate limiting ко всем запросам
app.use(generalLimiter);

// --- API endpoints ---

// Получение списка картин
app.get('/api/paintings', async (req, res) => {
  try {
    const paintings = await prisma.painting.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        instagramLink: true,
        price: true,
        createdAt: true
      }
    });
    res.json(paintings);
  } catch (error) {
    console.error('Failed to fetch paintings:', error);
    res.status(500).json({ error: 'Failed to fetch paintings' });
  }
});

// Получение данных о конкретной картине
app.get('/api/paintings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Валидация ID
    const paintingId = parseInt(id);
    if (isNaN(paintingId)) {
      return res.status(400).json({ error: 'Invalid painting ID' });
    }
    
    const painting = await prisma.painting.findUnique({
      where: { id: paintingId },
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        instagramLink: true,
        price: true,
        createdAt: true
      }
    });
    
    if (!painting) {
      return res.status(404).json({ error: 'Painting not found' });
    }
    
    res.json(painting);
  } catch (error) {
    console.error('Failed to fetch painting:', error);
    res.status(500).json({ error: 'Failed to fetch painting' });
  }
});

// Инициализация платежа через Robokassa (демо режим)
app.post('/api/payment/init', paymentLimiter, (req, res) => {
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

    // Валидация данных
    const amountFloat = parseFloat(amount);
    if (isNaN(amountFloat) || amountFloat <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Проверка длины orderId
    if (orderId.length > 50) {
      return res.status(400).json({ error: 'Order ID too long' });
    }

    // Проверка длины description
    if (description.length > 1000) {
      return res.status(400).json({ error: 'Description too long' });
    }

    const merchantLogin = process.env.ROBOKASSA_LOGIN;
    const password1 = process.env.ROBOKASSA_PASSWORD1;

    // Проверка наличия необходимых переменных окружения
    if (!merchantLogin || !password1) {
      console.error('Robokassa credentials not configured');
      return res.status(500).json({ error: 'Payment system not configured' });
    }

    // Формируем строку для хеширования
    const signatureString = `${merchantLogin}:${amountFloat.toFixed(2)}:${orderId}:${password1}`;
    
    // Вычисляем хеш (используем SHA256 как в вашем случае)
    const signature = crypto
      .createHash('sha256')
      .update(signatureString)
      .digest('hex');

    // Формируем URL для редиректа на Robokassa
    const redirectUrl = `https://auth.robokassa.ru/Merchant/Index.aspx?` +
      `MerchantLogin=${encodeURIComponent(merchantLogin)}&` +
      `OutSum=${encodeURIComponent(amountFloat.toFixed(2))}&` +
      `InvId=${encodeURIComponent(orderId)}&` +
      `Description=${encodeURIComponent(description)}&` +
      `SignatureValue=${signature}&` +
      `Culture=${culture}&` +
      `IsTest=${isTest}`;

    // Логирование платежа для мониторинга
    console.log(`Payment initialized: Order ${orderId}, Amount ${amountFloat.toFixed(2)}`);

    res.json({ 
      status: 'success',
      redirectUrl,
      orderId,
      amount: amountFloat.toFixed(2)
    });
  } catch (error) {
    console.error('Payment init error:', error);
    res.status(500).json({ error: 'Failed to initialize payment' });
  }
});

// Обработка результата оплаты (Result URL)
app.post('/api/payment/result', paymentLimiter, (req, res) => {
  try {
    const { OutSum, InvId, SignatureValue } = req.body;
    
    // Логирование входящих данных
    console.log(`Received payment result for order ${InvId}, amount: ${OutSum}`);
    
    // Проверка обязательных параметров
    if (!OutSum || !InvId || !SignatureValue) {
      console.log('Missing required parameters in payment result');
      return res.status(400).send('Missing required parameters');
    }
    
    const password2 = process.env.ROBOKASSA_PASSWORD2;
    
    // Проверка наличия необходимых переменных окружения
    if (!password2) {
      console.error('Robokassa password2 not configured');
      return res.status(500).send('Payment system not configured');
    }
    
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
    
    // Здесь можно добавить дополнительную логику:
    // 1. Проверку, не был ли уже обработан этот платеж
    // 2. Обновление статуса заказа в базе данных
    // 3. Отправку уведомлений
    
    console.log(`Payment successful for order ${InvId}, amount: ${OutSum}`);
    
    // Отправляем ответ Robokassa
    res.send(`OK${InvId}`);
  } catch (error) {
    console.error('Payment result error:', error);
    res.status(500).send('Error processing payment result');
  }
});

// Обработка успешной оплаты (Success URL)
app.get('/api/payment/success', paymentLimiter, (req, res) => {
  try {
    const { OutSum, InvId } = req.query;
    
    // Проверка обязательных параметров
    if (!OutSum || !InvId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Логирование успешного платежа
    console.log(`Payment success for order ${InvId}, amount: ${OutSum}`);
    
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

// Обработка отмены оплаты (Fail URL)
app.get('/api/payment/fail', paymentLimiter, (req, res) => {
  try {
    const { OutSum, InvId } = req.query;
    
    // Проверка обязательных параметров
    if (!OutSum || !InvId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Логирование отмены платежа
    console.log(`Payment failed for order ${InvId}, amount: ${OutSum}`);
    
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