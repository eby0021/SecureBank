// authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = "mykey";

// Function to generate a JWT token
function generateToken(userId) {
    // Define the payload for the token
    const payload = {
      userId: userId // Use 'userId' for consistency
    };
  
    // Create the token with a specified expiration (e.g., 1 hour)
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  
    return token;
}

function extractUserId(req, res, next) {
  // Get the token from the request headers, assuming it's in the 'Authorization' header
  const authorizationHeader = req.headers.authorization;
  console.log("authorization header:",authorizationHeader)

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  const token = authorizationHeader.split(" ")[1];
  console.log("token: ",token)
  try {
    // Verify and decode the token using your secret key
    const decoded = jwt.verify(token, secretKey);

    // Extract the user ID from the decoded token
    req.userId = decoded.userId;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}


module.exports = { extractUserId, generateToken };
