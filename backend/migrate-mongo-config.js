// server/migrate-mongo-config.js

const config = require('./config');

module.exports = {
  mongodb: {
    url: config.dbUrl, // Используем DB URL из config.js

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },

  migrationsDir: 'migrations', // Директория для миграций
  changelogCollectionName: 'changelog', // Коллекция для хранения изменений миграций
};
