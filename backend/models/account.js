const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnect');
const user = require('./user');

const Account = sequelize.define('Account', {
  accountType: {
    type: DataTypes.ENUM('Savings', 'Everyday'),
    allowNull: false,
  },
  accountNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  bsbNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // ...
});

// Define associations
// Account.belongsTo(user, { foreignKey: 'userId' });
module.exports = Account;
