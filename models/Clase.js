const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('clases', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  time: DataTypes.FLOAT,
  image: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
})

// {
//   hooks: {
//     beforeCreate: function (produt, options, fn) {
//       produt.createdAt = new Date();
//       produt.updatedAt = new Date();
//       fn(null, produt);
//     },
//     beforeUpdate: function (produt, options, fn) {
//       produt.updatedAt = new Date();
//       fn(null, produt);
//     },
//   },
// });