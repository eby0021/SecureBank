// db.js
const { Sequelize } = require('sequelize');
console.log("dbconnect")
const sequelize = new Sequelize('SecureBank', "sa", "123",{       //set these credentials in SSMS > Logins >                                                              
  host: 'localhost', // Your SQL Server host                       //sa > Properties > Security > SQL Server and Windows Authentication mode  
  dialect: 'mssql',
  dialectOptions: {
    options: {
      //trustedConnection: true
    },
  },
});

module.exports = sequelize;
