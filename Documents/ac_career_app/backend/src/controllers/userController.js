// backend/src/controllers/userController.js

const { db, admin } = require('../config/firebase');

const getCompletedPaths = async (req, res) => {
  try {
    const uid = req.user.uid; // Firebase UID
    const userDocRef = db.collection('users').doc(uid);
    const snap = await userDocRef.get();
    const data = snap.exists ? snap.data() : {};
    const completedPaths = Array.isArray(data.completedPaths) ? data.completedPaths : [];
    return res.status(200).json({ completedPaths });
  } catch (error) {
    console.error('Error fetching completed paths:', error);
    return res.status(500).json({ message: 'Server error fetching completed paths' });
  }
};

const completePath = async (req, res) => {
  try {
    const uid = req.user.uid; // Firebase UID
    const { pathId } = req.body;
    if (typeof pathId === 'undefined' || pathId === null) {
      return res.status(400).json({ message: 'pathId is required' });
    }

    await db.collection('users').doc(uid).set(
      { completedPaths: admin.firestore.FieldValue.arrayUnion(pathId) },
      { merge: true }
    );

    return res.status(200).json({ message: 'Completed paths updated successfully' });
  } catch (error) {
    console.error('Error updating completed paths:', error);
    return res.status(500).json({ message: 'Server error updating completed paths' });
  }
};

const getReputation = async (req, res) => {
  try {
    const uid = req.user.uid;
    const snap = await db.collection('users').doc(uid).get();
    const data = snap.exists ? snap.data() : {};
    const reputations = data.reputations || {};
    return res.status(200).json({ reputations });
  } catch (error) {
    console.error('Error fetching reputation:', error);
    return res.status(500).json({ message: 'Server error fetching reputation' });
  }
};

const updateReputation = async (req, res) => {
  try {
    const uid = req.user.uid;
    const { manufacturer, delta } = req.body;
    if (!manufacturer || typeof delta !== 'number') {
      return res.status(400).json({ message: 'manufacturer and numeric delta are required' });
    }

    const fieldPath = `reputations.${manufacturer}`;
    await db
      .collection('users')
      .doc(uid)
      .set({ reputations: { [manufacturer]: admin.firestore.FieldValue.increment(delta) } }, { merge: true });
    return res.status(200).json({ message: 'Reputation updated' });
  } catch (error) {
    console.error('Error updating reputation:', error);
    return res.status(500).json({ message: 'Server error updating reputation' });
  }
};

module.exports = {
  getCompletedPaths,
  completePath,
  getReputation,
  updateReputation,
};
