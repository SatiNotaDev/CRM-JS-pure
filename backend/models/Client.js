const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  type: String,
  value: String
});

const clientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  lastName: String,
  contacts: [contactSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);
