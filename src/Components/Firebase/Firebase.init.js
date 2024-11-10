// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXH6jOBwqVsNUqDIS_OdTs9f-sD6xPJ-Q",
  authDomain: "simple-firebase-123.firebaseapp.com",
  projectId: "simple-firebase-123",
  storageBucket: "simple-firebase-123.firebasestorage.app",
  messagingSenderId: "656158281840",
  appId: "1:656158281840:web:39e6cea82cb21d1b0e64b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;