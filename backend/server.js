const express = require('express');
const app = express();
const port = 3001; 

// Middleware for parsing JSON requests
app.use(express.json());

const sequelize = require('./dbconnect'); 
app.use((req, res, next) => {
  // Replace '*' with your frontend's actual domain if possible
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
// Import routes 
const routes = require('./routes/routes');

// Synchronize Sequelize with the database
//it will create the table if it does not exist
sequelize.sync()
.then(() => {
  console.log('Database synchronized');
})
.catch(err => {
  console.error('Error synchronizing database:', err);
});

// Use the routes defined in the routes.js file
//all routes defined at one place that is routes.js
app.use('/', routes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
