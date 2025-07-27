// backend/src/controllers/userController.js

const {
  fetchCompletedPathsFromDB,
  addCompletedPathToDB,
} = require('../helpers/dbHelpers');

const getCompletedPaths = async (req, res) => {
  try {
    const userId = req.user.sub; // Auth0 user ID
    // Fetch completed paths from your database using userId
    const completedPaths = await fetchCompletedPathsFromDB(userId);

    res.status(200).json({ completedPaths });
  } catch (error) {
    console.error('Error fetching completed paths:', error);
    res.status(500).json({ message: 'Server error fetching completed paths' });
  }
};

const completePath = async (req, res) => {
  try {
    const userId = req.user.sub; // Auth0 user ID
    const { pathId } = req.body;

    // Update completed paths in your database using userId and pathId
    await addCompletedPathToDB(userId, pathId);

    res.status(200).json({ message: 'Completed paths updated successfully' });
  } catch (error) {
  console.error('Error updating completed paths:', error);
    res.status(500).json({ message: 'Server error updating completed paths' });
  }
};

module.exports = {
  getCompletedPaths,
  completePath,
};
