// models/URL.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const URL = sequelize.define("URL", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  originalURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortURL: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Define associations
URL.belongsTo(User); // Each URL belongs to a User

module.exports = URL;
