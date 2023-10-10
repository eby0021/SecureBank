const User = require('../models/user'); // Import the user model
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWTs
const {generateToken} = require('../auth/auth'); // Import the token generation function
class UserController {
  // User registration (Sign up)
  async signUp(req, res) {
    console.log("hello signup")
    // return res.status(201).json({ message: 'hehehehehehhe' });

    try {
      // Get user input from request body
      const {
        firstName,
        lastName,
        middleName,
         fatherName = "Khan",
        dateOfBirth,
        email,
        password,
        // payId,
      } = req.body;
      console.log("first name:"+firstName)
      console.log("email:"+email)

      // Check if the email is already registered
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        firstName,
        lastName,
        middleName,
        fatherName,
        dateOfBirth,
        email,
        password: hashedPassword, // Store the hashed password
        // payId, // Optional field
      });

      // Return a success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error in signUp:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // User login
  async login(req, res) {
    try {
      // Get user input from request body
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ where: { email } });

      // Check if the user exists
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log("password", password)
      if (passwordMatch) {
     //   console.log("email", email)
        const token = generateToken(user.userId);
        res.status(200).json({ message: 'User logged in successfully', token });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // View user profile
  async viewProfile(req, res) {
    try {
      const userId = req.userId; 
        console.log("email or userId is================================", email)
      // Find the user by userId
      const user = await User.findOne({ where: { userId } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return user object
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error in viewProfile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new UserController();
