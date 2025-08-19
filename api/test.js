export default async function handler(req, res) {
  res.status(200).json({ 
    message: 'API is working correctly',
    timestamp: new Date().toISOString()
  });
}