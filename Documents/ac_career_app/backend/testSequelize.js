// backend/testSequelize.js

const dotenv = require('dotenv');
const { sequelize, User } = require('./src/models');

dotenv.config();

const testSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const users = await User.findAll();
    console.log('All Users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

testSequelize();
