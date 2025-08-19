# Деплой проекта на Vercel

## Подготовка к деплою

1. Убедитесь, что репозиторий проекта загружен на GitHub

2. Зарегистрируйтесь или войдите в аккаунт на [Vercel](https://vercel.com/)

## Деплой проекта

1. Перейдите на [Vercel Dashboard](https://vercel.com/dashboard)

2. Нажмите "New Project"

3. Импортируйте репозиторий проекта с GitHub

4. Vercel автоматически определит настройки проекта:
   - Фреймворк: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

5. Перед деплоем добавьте переменные окружения в разделе "Environment Variables":
   - `ROBOKASSA_LOGIN` - логин от Robokassa
   - `ROBOKASSA_PASSWORD1` - первый пароль от Robokassa
   - `ROBOKASSA_PASSWORD2` - второй пароль от Robokassa
   - `DATABASE_URL` - URL базы данных PostgreSQL (если используется в продакшене)

6. Нажмите "Deploy"

## Настройка API endpoints

Vercel автоматически развернет следующие API endpoints:
- `/api/paintings` - получение списка картин
- `/api/paintings/[id]` - получение конкретной картины
- `/api/payment/init` - инициация платежа
- `/api/payment/result` - обработка результата платежа
- `/api/payment/success` - обработка успешного платежа
- `/api/payment/fail` - обработка неуспешного платежа

## Настройка Robokassa

В настройках магазина Robokassa укажите следующие URLs:
- Result URL: `https://ваш-домен.vercel.app/api/payment/result`
- Success URL: `https://ваш-домен.vercel.app/api/payment/success`
- Fail URL: `https://ваш-домен.vercel.app/api/payment/fail`

## Тестирование платежей

Для тестирования платежей используйте следующие данные:
- Номер карты: 4242424242424242
- Месяц/Год: любая будущая дата
- CVV: 123
- Имя владельца: любое имя

Все платежи будут в тестовом режиме, средства не списываются.