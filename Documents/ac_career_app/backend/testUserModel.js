// backend/testUserModel.js

const dotenv = require('dotenv');
const { sequelize, User } = require('./src/models');

dotenv.config();

const testUserModel = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Create a new user
    const newUser = await User.create({
      email: 'testuser@example.com',
      password: 'hashedpassword123', // Use a hashed password
    });

    console.log('New User:', newUser.toJSON());

    // Fetch the user
    const fetchedUser = await User.findOne({ where: { email: 'testuser@example.com' } });
    console.log('Fetched User:', fetchedUser.toJSON());
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
};

testUserModel();
