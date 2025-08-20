import { createHash } from 'crypto';
import { isRestTypeNode } from 'typescript';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { OutSum, InvId, SignatureValue } = req.body;
    
    
    const password2 = process.env.ROBOKASSA_PASSWORD2;
    
    
    if (!password2) {
      return res.status(500).send('Payment system not configured');
    }
    
    // Формируем строку для хеширования
    const signatureString = `${OutSum}:${InvId}:${password2}`;
    
    
    // Вычисляем хеш для проверки
    const expectedSignature = createHash('sha256')
      .update(signatureString)
      .digest('hex');
    
    
    if (SignatureValue.toLowerCase() !== expectedSignature.toLowerCase()) {
      return res.status(400).send('Invalid signature');
    }
    
    
    
    console.log(`Payment successful for order ${InvId}, amount: ${OutSum}`);
    
    // Отправляем ответ Robokassa
    res.status(200).send(`OK${InvId}`);
  } catch (error) {
    console.error('Payment result error:', error);
    res.status(500).send('Error processing payment result');
  }
}