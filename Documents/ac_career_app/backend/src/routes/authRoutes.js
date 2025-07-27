// backend/src/routes/authRoutes.js

const express = require('express');
const { signup, login } = require('../controllers/authController');
const { body } = require('express-validator');
const router = express.Router();

// Signup Route with Validation
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  signup
);

// Login Route with Validation
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  login
);

router.get('/test', (req, res) => {
    res.json({ message: 'Auth route is working' });
  });

module.exports = router;
