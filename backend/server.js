const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const clientsRouter = require('./routes/clients');
const config = require('./config');

const app = express();

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Подключено к базе данных'))
  .catch((error) => console.error('Ошибка подключения к базе данных:', error));

app.use(cors());
app.use(express.json());
app.use('/api', clientsRouter);

// Обслуживание статических файлов
app.use(express.static(path.join(__dirname, '../public')));

app.listen(config.port, () => console.log(`Сервер запущен на порту ${config.port}`));
