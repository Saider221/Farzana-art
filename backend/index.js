const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { Result } = require('postcss');
const crypto= require('crypto')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// --- API endpoints ---

// Получение списка картин
app.get('/api/paintings', (req, res) => {
  // Заглушка: возвращаем массив картин
  res.json([
    { id: 1, title: 'Картина 1', image: 'url1', instagram: 'insta1' },
    { id: 2, title: 'Картина 2', image: 'url2', instagram: 'insta2' },
  ]);
});

// Получение данных о конкретной картине
app.get('/api/paintings/:id', (req, res) => {
  // Заглушка: возвращаем одну картину по id
  const { id } = req.params;
  res.json({ id, title: `Картина ${id}`, image: `url${id}`, instagram: `insta${id}` });
});
import assert from 'node:assert/strict';

assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError,
);
import assert from 'node:assert/strict';

assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  /Wrong value/,
  'Whoops',
);


// Инициализация платежа
app.post('/api/payment/init', (req, res) => {
  // Заглушка: возвращаем статус и данные платежа
  res.json({ status: 'init', paymentId: '12345' });
});

// Обработка уведомлений от платежной системы
app.post('/api/payment/callback', (req, res) => {
  // Заглушка: принимаем уведомление
  res.json({ status: 'callback received' });
  
});

app.listen(3001, () => console.log('Server running on port 3001')); 
 