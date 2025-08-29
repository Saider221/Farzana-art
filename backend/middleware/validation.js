// Middleware для валидации ID картины
const validatePaintingId = (req, res, next) => {
  const { id } = req.params;
  
  // Проверка, что ID является числом
  const paintingId = parseInt(id);
  if (isNaN(paintingId) || paintingId <= 0) {
    return res.status(400).json({ error: 'Invalid painting ID. ID must be a positive integer.' });
  }
  
  // Добавляем валидный ID в request объект
  req.paintingId = paintingId;
  next();
};

// Middleware для валидации данных платежа
const validatePaymentData = (req, res, next) => {
  const { amount, orderId, description } = req.body;
  
  // Проверка обязательных полей
  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }
  
  if (!orderId) {
    return res.status(400).json({ error: 'Order ID is required' });
  }
  
  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }
  
  // Валидация суммы
  const amountFloat = parseFloat(amount);
  if (isNaN(amountFloat) || amountFloat <= 0) {
    return res.status(400).json({ error: 'Amount must be a positive number' });
  }
  
  // Проверка длины orderId
  if (typeof orderId !== 'string' || orderId.length > 50) {
    return res.status(400).json({ error: 'Order ID must be a string with maximum 50 characters' });
  }
  
  // Проверка длины description
  if (typeof description !== 'string' || description.length > 1000) {
    return res.status(400).json({ error: 'Description must be a string with maximum 1000 characters' });
  }
  
  // Добавляем валидные данные в request объект
  req.validatedPaymentData = {
    amount: amountFloat,
    orderId,
    description
  };
  
  next();
};

module.exports = {
  validatePaintingId,
  validatePaymentData
};