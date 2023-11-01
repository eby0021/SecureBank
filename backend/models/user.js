// models/User.js
const  account  = require('./account'); // Import the user model
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconnect');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY, // Assuming you store only the date part of the birthdate
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure email is unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payId: {
    type: DataTypes.STRING,
    allowNull: true, // Pay ID is optional
  },
});

// Define associations with other models (if any)
// User.hasMany(account, { foreignKey: 'userId', as: 'accounts' });
module.exports = User;
