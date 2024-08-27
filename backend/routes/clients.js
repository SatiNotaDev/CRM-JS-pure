const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Получение всех клиентов
router.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Создание нового клиента
router.post('/clients', async (req, res) => {
  const client = new Client(req.body);
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Получение клиента по ID
router.get('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: 'Клиент не найден' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Обновление клиента
router.patch('/clients/:id', async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Удаление клиента
router.delete('/clients/:id', async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: 'Клиент удален' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
