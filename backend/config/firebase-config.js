const admin = require('firebase-admin');
const serviceAccount = require('./campusquestctp2024-firebase-adminsdk-8xujr-92d56a2ab5.json'); // Replace with your actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL, // Replace with your project ID
});


module.exports = admin;