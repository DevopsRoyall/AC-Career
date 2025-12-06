// backend/src/controllers/authController.js

// Firebase-based flow: clients should authenticate with Firebase directly
// This controller exposes a simple profile endpoint.
const { admin, db } = require('../config/firebase');

const me = async (req, res) => {
  try {
    // req.user is populated by Firebase auth middleware
    const { uid, email } = req.user;

    // Ensure a user profile document exists
    const userDocRef = db.collection('users').doc(uid);
    const snap = await userDocRef.get();
    if (!snap.exists) {
      await userDocRef.set({ email: email || null, createdAt: new Date(), completedPaths: [] });
    }
    const adminUids = (process.env.FIREBASE_ADMIN_UIDS || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const isAdmin = adminUids.includes(uid);
    return res.status(200).json({ uid, email, isAdmin });
  } catch (error) {
    console.error('Profile Error:', error);
    return res.status(500).json({ message: 'Server error fetching profile' });
  }
};

module.exports = { me };
