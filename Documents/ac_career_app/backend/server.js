// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const eventAdminRoutes = require('./src/routes/eventAdminRoutes');
const ingestRoutes = require('./src/routes/ingestRoutes');
const metaRoutes = require('./src/routes/metaRoutes');
const sponsorRoutes = require('./src/routes/sponsorRoutes');
const logger = require('./src/config/logger'); // Ensure logger is imported
require('./src/config/firebase'); // Initialize Firebase Admin

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
app.use('/api/events', eventRoutes);
app.use('/api/events-admin', eventAdminRoutes);
app.use('/api/ingest', ingestRoutes);
app.use('/api/meta', metaRoutes);
app.use('/api/sponsors', sponsorRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for testing
