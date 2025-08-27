import { createHash } from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      amount, 
      orderId, 
      description,
      isTest = 1  // 1 для тестового режима
    } = req.body;

    // Логирование входящих параметров
    console.log('Payment init request:', { amount, orderId, description, isTest });

    // Проверка обязательных параметров
    if (!amount || !orderId || !description) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Переменные окружения будут автоматически доступны на Vercel
    const merchantLogin = process.env.ROBOKASSA_LOGIN;
    const password1 = process.env.ROBOKASSA_PASSWORD1;

    // Логирование переменных окружения (без паролей!)
    console.log('Environment variables:', { 
      merchantLogin: merchantLogin ? 'SET' : 'NOT SET',
      password1: password1 ? 'SET' : 'NOT SET'
    });

    // Проверка наличия необходимых переменных окружения
    if (!merchantLogin || !password1) {
      return res.status(500).json({ error: 'Payment system not configured' });
    }

    // Формируем строку для хеширования
    const signatureString = `${merchantLogin}:${amount}:${orderId}:${password1}`;
    
    // Вычисляем хеш (используем SHA256 как в вашем случае)
    const signature = createHash('sha256')
      .update(signatureString)
      .digest('hex');

    // Логирование для отладки
    console.log('Signature string:', signatureString);
    console.log('Generated signature:', signature);

    // Формируем URL для редиректа на Robokassa
    const redirectUrl = `https://auth.robokassa.ru/Merchant/Index.aspx?` +
      `MerchantLogin=${encodeURIComponent(merchantLogin)}&` +
      `OutSum=${encodeURIComponent(amount)}&` +
      `InvId=${encodeURIComponent(orderId)}&` +
      `Description=${encodeURIComponent(description)}&` +
      `SignatureValue=${signature}&` +
      `Culture=ru&` +
      `IsTest=${isTest}`;

    console.log('Redirect URL:', redirectUrl);

    res.status(200).json({ 
      status: 'success',
      redirectUrl,
      orderId,
      amount
    });
  } catch (error) {
    console.error('Payment init error:', error);
    res.status(500).json({ error: 'Failed to initialize payment' });
  }
}