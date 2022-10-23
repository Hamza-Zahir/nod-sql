const Sequelize = require('sequelize');
const Scode = require("../env")
// 'SQLazmah98@@'
const sequelize = new Sequelize('node-complete', 'root', Scode , {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
