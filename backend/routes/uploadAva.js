const express = require('express');
const router = express.Router();
const admin = require('../config/firebase-config');
const multer = require('multer'); // For handling file uploads

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

router.post('/avatar/:uid', upload.single('avatar'), async (req, res) => {
  const uid = req.params.uid;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const bucket = admin.storage().bucket();
    const fileRef = bucket.file(`avatars/${uid}/${file.originalname}`);
    const [uploadResult] = await fileRef.save(file.buffer);

    const avatarUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/avatars%2F${uid}%2F${file.originalname}?alt=media`;

    // Update the user's avatar URL in your database
    const db = admin.firestore(); // Assuming you're using Firestore
    await db.collection('users').doc(uid).update({ avatarUrl });

    res.json({ avatarUrl });
  } catch (error) {
    console.error('Avatar upload error:', error);
    res.status(500).json({ error: 'Failed to upload avatar' });
  }
});

module.exports = router;