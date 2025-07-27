const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  logging: console.log, // Set to true for detailed logs
});

// Import Models
const User = require('./user')(sequelize);
const Path = require('./path')(sequelize);

// Define Associations
User.hasMany(Path, { foreignKey: 'userId', as: 'paths' });
Path.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Path,
};
