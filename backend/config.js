// server/config.js
require('dotenv').config({ path: './server/.env' });

module.exports = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT || 3000
};
