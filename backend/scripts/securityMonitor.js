// Скрипт для мониторинга безопасности и логирования подозрительной активности

const fs = require('fs');
const path = require('path');

// Функция для отправки уведомлений (в реальной системе это может быть email, Slack, SMS и т.д.)
const sendAlert = (message) => {
  console.warn(`SECURITY ALERT: ${message}`);
  // Здесь можно добавить отправку уведомлений администратору
  // Например, через email, Slack webhook, SMS и т.д.
};

// Функция для анализа логов на подозрительную активность
const analyzeLogs = () => {
  const logFile = path.join(__dirname, '../logs/security.log');
  
  // Если файл логов существует, анализируем его
  if (fs.existsSync(logFile)) {
    const logContent = fs.readFileSync(logFile, 'utf8');
    const lines = logContent.split('\n');
    
    // Анализируем последние 100 строк логов
    const recentLines = lines.slice(-100);
    
    // Счетчики для различных типов активности
    let requestCount = 0;
    let errorCount = 0;
    let suspiciousPatterns = 0;
    
    const suspiciousRegex = [
      /(\||&|;|\$\(.*\)|`.*`)/, // Командная инъекция
      /(\.\.\/)/, // Path traversal
      /(<script|javascript:)/i, // XSS
      /(union\s+select|insert\s+into|delete\s+from|drop\s+table)/i // SQL инъекция
    ];
    
    recentLines.forEach(line => {
      if (line.includes(' - GET ') || line.includes(' - POST ')) {
        requestCount++;
      }
      
      if (line.includes('ERROR') || line.includes('FAILED')) {
        errorCount++;
      }
      
      for (const pattern of suspiciousRegex) {
        if (pattern.test(line)) {
          suspiciousPatterns++;
          sendAlert(`Suspicious pattern detected: ${pattern} in log line: ${line}`);
        }
      }
    });
    
    // Если слишком много запросов за короткое время, это может быть DDoS
    if (requestCount > 50) {
      sendAlert(`High request volume detected: ${requestCount} requests in recent logs`);
    }
    
    // Если слишком много ошибок, это может указывать на атаку
    if (errorCount > 10) {
      sendAlert(`High error rate detected: ${errorCount} errors in recent logs`);
    }
  }
};


const checkFileIntegrity = () => {
  const criticalFiles = [
    '../index.cjs',
    '../middleware/rateLimiter.js',
    '../middleware/securityLogger.js'
  ];
  
  
  console.log('File integrity check completed');
};

// Основная функция мониторинга
const runSecurityMonitor = () => {
  console.log('Running security monitor...');
  
  try {
    analyzeLogs();
    checkFileIntegrity();
    
    console.log('Security monitor completed successfully');
  } catch (error) {
    console.error('Security monitor failed:', error);
    sendAlert(`Security monitor failed: ${error.message}`);
  }
};

// Запускаем мониторинг
if (require.main === module) {
  runSecurityMonitor();
}

module.exports = {
  runSecurityMonitor,
  sendAlert
};