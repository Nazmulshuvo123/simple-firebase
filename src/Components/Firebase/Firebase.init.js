// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD8VMMc5EXeV5YOlQNJQvBXFNLnyW4Ecc",
  authDomain: "simple-firebase3-7ecf1.firebaseapp.com",
  projectId: "simple-firebase3-7ecf1",
  storageBucket: "simple-firebase3-7ecf1.firebasestorage.app",
  messagingSenderId: "314746080990",
  appId: "1:314746080990:web:3629bf56eb145402fbbc4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);