const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('fec', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;