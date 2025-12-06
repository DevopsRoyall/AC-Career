// backend/src/routes/authRoutes.js

const express = require('express');
const { me } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

// Authenticated profile endpoint (clients authenticate with Firebase directly)
router.get('/me', authenticate, me);

router.get('/test', (req, res) => {
    res.json({ message: 'Auth route is working' });
  });

module.exports = router;
