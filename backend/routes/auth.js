const express = require('express');
const router = express.Router();
const admin = require('../config/firebase-config');
const {getAuth}=require('firebase-admin/auth');
const {getFirestore} = require('firebase-admin/firestore')

const db = getFirestore();//connect to database


router.post('/signup', async (req, res) => {
  const { useremail, userpassword, username } = req.body;

  try {
    // Create user in Firebase Authentication

    getAuth().createUser({
      email: useremail,
      emailVerified: false,
      password: userpassword,
      displayName: username,
      disabled: false,
    }).then(async (userRecord)=>{
      //userRecord contains datas of the user that we just created, include userId
      console.log('Successfully created new user: ', userRecord);
      const uid = userRecord.uid; //access user's id
      serverResponse = userRecord.toJSON();

      //store the following data in an object
      const userData = {
        userId: uid,
        email: useremail,
      };
      //store the object into the collection users in database under the doc that was named user's id
      const res = await db.collection('users').doc(uid).set(userData);
    })
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create account' });
  }
});

module.exports = router;