import { createHash } from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { OutSum, InvId, SignatureValue } = req.body;
    
    // Переменные окружения будут автоматически доступны на Vercel
    const password2 = process.env.ROBOKASSA_PASSWORD2;
    
    // Проверка наличия необходимой переменной окружения
    if (!password2) {
      return res.status(500).send('Payment system not configured');
    }
    
    // Формируем строку для хеширования
    const signatureString = `${OutSum}:${InvId}:${password2}`;
    
    // Вычисляем хеш для проверки
    const expectedSignature = createHash('sha256')
      .update(signatureString)
      .digest('hex');
    
    // Проверяем подпись
    if (SignatureValue.toLowerCase() !== expectedSignature.toLowerCase()) {
      return res.status(400).send('Invalid signature');
    }
    
    // Здесь должна быть логика обработки успешного платежа
    // Например, обновление статуса заказа в БД
    
    console.log(`Payment successful for order ${InvId}, amount: ${OutSum}`);
    
    // Отправляем ответ Robokassa
    res.status(200).send(`OK${InvId}`);
  } catch (error) {
    console.error('Payment result error:', error);
    res.status(500).send('Error processing payment result');
  }
}