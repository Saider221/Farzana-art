# Безопасность переменных окружения

## Важно

Файл `.env` **никогда** не должен коммититься в репозиторий. Он содержит конфиденциальную информацию, такую как ключи доступа к базе данных и платежным системам.

## Что делать

1. Убедитесь, что `.env` добавлен в `.gitignore` (уже сделано)
2. Создайте файл `.env` локально у себя на машине со следующим содержимым:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/database_name?sslmode=require
   ROBOKASSA_LOGIN=your_robokassa_login
   ROBOKASSA_PASSWORD1=your_first_password_for_robokassa
   ROBOKASSA_PASSWORD2=your_second_password_for_robokassa
   ```

3. При деплое на Vercel, установите эти переменные в настройках проекта:
   - Перейдите в настройки проекта на Vercel
   - Откройте вкладку "Environment Variables"
   - Добавьте каждую переменную отдельно

## Файл .env.example

В репозитории есть файл `.env.example`, который показывает, какие переменные необходимы, но не содержит реальных значений. Этот файл можно безопасно коммитить.