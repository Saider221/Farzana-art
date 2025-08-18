export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { OutSum, InvId } = req.query;
    
    // Здесь может быть логика обработки отмены оплаты
    // Например, показ сообщения об отмене
    
    res.status(200).json({ 
      status: 'fail',
      message: 'Payment was cancelled',
      orderId: InvId,
      amount: OutSum
    });
  } catch (error) {
    console.error('Payment fail error:', error);
    res.status(500).json({ error: 'Error processing payment fail' });
  }
}