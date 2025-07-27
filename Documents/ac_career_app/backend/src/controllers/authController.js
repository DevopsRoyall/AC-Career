// backend/src/controllers/authController.js

const admin = require('../config/firebase');
const { User } = require('../models');

// Signup Controller
const signup = async (req, res) => {
  try {
    const { idToken } = req.body;
    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, email } = decoded;

    let user = await User.findOne({ where: { firebaseUid: uid } });
    if (!user) {
      user = await User.create({ firebaseUid: uid, email });
    }

    res.status(201).json({ message: 'User synced', uid, email });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { idToken } = req.body;
    const decoded = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ message: 'Login verified', uid: decoded.uid });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { signup, login };
