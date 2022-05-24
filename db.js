const { Sequelize } = require('sequelize');

// Importing models
const User = require('./models/User');
const Clase = require('./models/Clase');

// Database connection
const sequelize = new Sequelize('api-salsa', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Getting models
const models = [
  User,
  Clase,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { users, clases } = sequelize.models;
clases.belongsTo(users); // Relation one-to-one in reviews table

module.exports = sequelize;