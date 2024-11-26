// config/database.js
const Sequelize = require("sequelize");

// Initialize Sequelize with database credentials and dialect
const sequelize = new Sequelize("url_shortener", "root", null, {
  host: "localhost",
  dialect: "mysql", // Specify the dialect as 'mysql'
  // Other options...
});

module.exports = sequelize;
