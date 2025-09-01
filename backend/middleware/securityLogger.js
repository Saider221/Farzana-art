// Middleware 
const securityLogger = (req, res, next) => {
  // Логируем каждый запрос
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip} - User-Agent: ${req.get('User-Agent')}`);
  
  // Проверяем на подозрительные паттерны в URL
  const suspiciousPatterns = [
    /(\||&|;|\$\(.*\)|`.*`)/, // Командная инъекция
    /(\.\.\/)/, 
    /(<script|javascript:)/i, // XSS
    /(union\s+select|insert\s+into|delete\s+from|drop\s+table)/i // SQL инъекция
  ];
  
  const fullPath = req.path + (req.url.includes('?') ? req.url.split('?')[1] : '');
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(fullPath) || (req.body && pattern.test(JSON.stringify(req.body)))) {
      console.warn(`SUSPICIOUS ACTIVITY DETECTED: ${req.method} ${req.path} from IP ${req.ip}`);
      console.warn(`Suspicious pattern: ${pattern}`);
      
    }
  }
  
  next();
};

module.exports = securityLogger;