// backend/src/middleware/authMiddleware.js

const admin = require('../config/firebase');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';

  // Check if Authorization header exists and is formatted correctly
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify Firebase token
    const decoded = await admin.auth().verifyIdToken(token);

    // Attach decoded token info to request object
    req.user = { uid: decoded.uid, email: decoded.email };

    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticate;
