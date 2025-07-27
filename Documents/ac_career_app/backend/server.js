// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./src/models');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const logger = require('./src/config/logger'); // Ensure logger is imported

dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start Server
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    module.exports = app; // Export for testing
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
