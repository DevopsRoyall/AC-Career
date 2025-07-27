// backend/src/models/path.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Path = sequelize.define('Path', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pathId: { // Corresponds to path.id in frontend
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Path;
};
