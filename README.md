# Farzana Art Gallery

Онлайн-галерея картин художницы Farzana.

## Описание

Этот проект представляет собой веб-приложение для отображения и продажи картин художницы Farzana. Проект включает в себя каталог картин, возможность просмотра деталей каждой картины и тестовую систему оплаты через Robokassa.

## Технологии

- Фронтенд: React, TypeScript, Vite, Tailwind CSS
- Бэкенд: Vercel Serverless Functions
- База данных: PostgreSQL (через Prisma)
- Платежная система: Robokassa (тестовый режим)

## Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone <repository-url>
   cd Farzana-art-1
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения:
   Создайте файл `.env` в папке `backend` со следующим содержимым:
   ```
   DATABASE_URL=your_database_url
   ROBOKASSA_LOGIN=your_robokassa_login
   ROBOKASSA_PASSWORD1=your_robokassa_password1
   ROBOKASSA_PASSWORD2=your_robokassa_password2
   ```

4. Запустите приложение в режиме разработки:
   ```bash
   npm run dev
   ```

## Деплой на Vercel

Проект готов к деплою на Vercel. Для этого:

1. Создайте аккаунт на [Vercel](https://vercel.com/)
2. Подключите репозиторий к Vercel
3. Установите переменные окружения в настройках проекта на Vercel:
   - `DATABASE_URL`
   - `ROBOKASSA_LOGIN`
   - `ROBOKASSA_PASSWORD1`
   - `ROBOKASSA_PASSWORD2`
4. Vercel автоматически задеплоит проект

**ВАЖНО:** Файл `.env` не должен коммититься в репозиторий и содержится только локально у разработчика.

## Структура проекта

- `src/` - Фронтенд приложение (React, TypeScript)
- `api/` - Serverless функции для API (Vercel)
- `public/` - Статические файлы
- `prisma/` - Конфигурация Prisma (ORM)

## Тестирование платежной системы

Для тестирования оплаты используйте следующие данные:
- Номер карты: 4242424242424242
- Месяц/Год: любая будущая дата
- CVV: 123
- Имя владельца: любое имя

## Рекомендации по базе данных

Для продакшена рекомендуется использовать одну из следующих облачных баз данных:

1. **Neon** - Serverless PostgreSQL, отлично подходит для Vercel
2. **Supabase** - Firebase-альтернатива с PostgreSQL
3. **Railway** - Универсальная платформа для деплоя приложений и баз данных
4. **PlanetScale** - Serverless MySQL (если предпочитаете MySQL)

Все эти сервисы предоставляют бесплатные тарифы для разработки.

## Разработка

### Команды

- `npm run dev` - Запуск проекта в режиме разработки
- `npm run build` - Сборка проекта для продакшена
- `npm run lint` - Проверка кода с помощью ESLint

## Лицензия

MIT