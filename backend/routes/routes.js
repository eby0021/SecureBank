const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const userController = require("../controllers/UserController");
const {extractUserId} = require('../auth/auth');
// Sample route for user registration
router.post('/register', userController.signUp);
router.get('/', (req, res) => {
    console.log("hello console")
    res.status(201).json({ message: 'Welcome to SecureBank' });

});

// Route for user login
router.post('/login', userController.login);
// Sample route for checking account balance
router.get('/account/balance', (req, res) => {
  
  res.json({ balance: 1000 }); // Sample response
});

// Route for sending money to another user
router.post('/send-money', (req, res) => {

 
  res.json({ message: 'Money sent successfully' });
});


router.post('/pay-bill', (req, res) => {
  // Handle bill payment logic here
  
  res.json({ message: 'Bill payment successful' });
});

// Route for viewing user profile

// ...

// Route for viewing user profile
router.get('/viewProfile', extractUserId, async (req, res) => {
    // You can now access the user ID as req.userId
    const userId = req.userId;
  
    try {
      // Find the user by ID
      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }, // Exclude password from the response
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return user profile information
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error in viewProfile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// ...


// Add more routes for your banking operations

module.exports = router;
