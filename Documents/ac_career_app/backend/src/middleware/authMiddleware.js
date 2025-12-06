// backend/src/middleware/authMiddleware.js

const { admin } = require('../config/firebase');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const idToken = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // contains uid, email, etc.
    return next();
  } catch (error) {
    console.error('Authentication Error:', error);
    return res.status(401).json({ message: 'Invalid or expired Firebase token' });
  }
};

module.exports = authenticate;
