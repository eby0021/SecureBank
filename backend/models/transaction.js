// models/Transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnect');
const Account = require('./account'); // Import the Account model

const Transaction = sequelize.define('Transaction', {
  trxId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure transaction ID is unique
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
  },
  receiverAccountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senderAccountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define associations with other models
Transaction.belongsTo(Account, { foreignKey: 'receiverAccountNumber', targetKey: 'accountNumber', as: 'receiverAccount' });
Transaction.belongsTo(Account, { foreignKey: 'senderAccountNumber', targetKey: 'accountNumber', as: 'senderAccount' });

module.exports = Transaction;
