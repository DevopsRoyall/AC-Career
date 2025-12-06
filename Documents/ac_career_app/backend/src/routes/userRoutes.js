// backend/src/routes/userRoutes.js

const express = require('express');
const { getCompletedPaths, completePath, getReputation, updateReputation } = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Get Completed Paths
router.get('/completed-paths', authenticate, getCompletedPaths);

// Complete a Path
router.post('/complete-path', authenticate, completePath);

// Reputation
router.get('/reputation', authenticate, getReputation);
router.post('/reputation', authenticate, updateReputation);

module.exports = router;
