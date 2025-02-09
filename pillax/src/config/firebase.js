// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhq0kPSp4wqHO8-uHqdI3-tW4oVi6U2LQ",
  authDomain: "pillax-nyu25.firebaseapp.com",
  projectId: "pillax-nyu25",
  storageBucket: "pillax-nyu25.firebasestorage.app",
  messagingSenderId: "999847275741",
  appId: "1:999847275741:web:c92e1ec68a1d153ef3bf34",
  measurementId: "G-HX3434LGBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export default db;

export { auth, storage };
