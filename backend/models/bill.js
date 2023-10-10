// models/Bill.js
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnect');

const Bill = sequelize.define('Bill', {
  billerCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure biller code is unique
  },
  referenceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure reference number is unique
  },
  billerNickname: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Bill;
