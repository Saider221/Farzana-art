const fs = require('fs');
const path = require('path');

// Middleware для логирования подозрительной активности
const securityLogger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip} - User-Agent: ${req.get('User-Agent')}\n`;
  
  // Записываем в файл логов
  const logFile = path.join(__dirname, '../logs/security.log');
  fs.appendFileSync(logFile, logEntry);
  
  // Также выводим в консоль
  console.log(logEntry.trim());
  
  // Проверяем на подозрительные паттерны в URL
  const suspiciousPatterns = [
    /(\||&|;|\$\(.*\)|`.*`)/, // Командная инъекция
    /(\.\.\/)/, // Path traversal
    /(<script|javascript:)/i, // XSS
    /(union\s+select|insert\s+into|delete\s+from|drop\s+table)/i // SQL инъекция
  ];
  
  const fullPath = req.path + (req.url.includes('?') ? req.url.split('?')[1] : '');
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(fullPath) || (req.body && pattern.test(JSON.stringify(req.body)))) {
      const alertEntry = `SUSPICIOUS ACTIVITY DETECTED: ${req.method} ${req.path} from IP ${req.ip}\n`;
      fs.appendFileSync(logFile, alertEntry);
      console.warn(`SUSPICIOUS ACTIVITY DETECTED: ${req.method} ${req.path} from IP ${req.ip}`);
      console.warn(`Suspicious pattern: ${pattern}`);
      // Здесь можно добавить отправку уведомления администратору
    }
  }
  
  next();
};

module.exports = securityLogger;