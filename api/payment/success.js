export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { OutSum, InvId } = req.query;
    
    // Здесь может быть дополнительная логика после успешной оплаты
    // Например, показ сообщения об успешной оплате
    
    res.status(200).json({ 
      status: 'success',
      message: 'Payment completed successfully',
      orderId: InvId,
      amount: OutSum
    });
  } catch (error) {
    console.error('Payment success error:', error);
    res.status(500).json({ error: 'Error processing payment success' });
  }
}