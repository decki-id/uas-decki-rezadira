const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Product extends Sequelize.Model {}

Product.init({
  name: Sequelize.STRING,
  price: Sequelize.INTEGER
}, { sequelize, modelName: 'product' });

module.exports = Product;