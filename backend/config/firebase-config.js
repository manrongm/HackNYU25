const admin = require('firebase-admin');
const serviceAccount = require('./pillax-nyu25-firebase-adminsdk-fbsvc-6593b5e119.json'); // Replace with your actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL, // Replace with your project ID
});


module.exports = admin;