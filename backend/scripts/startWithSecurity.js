// Скрипт для запуска сервера с включенными мерами безопасности

const { runSecurityMonitor } = require('./securityMonitor');

// Запускаем мониторинг безопасности
console.log('Starting security monitoring...');
runSecurityMonitor();

// Запускаем основной сервер
console.log('Starting main server...');
require('../index.cjs');