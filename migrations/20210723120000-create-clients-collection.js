module.exports = {
    async up(db, client) {
      // Создание коллекции клиентов
      await db.createCollection('clients');
    },
  
    async down(db, client) {
      // Удаление коллекции клиентов
      await db.collection('clients').drop();
    }
  };

  