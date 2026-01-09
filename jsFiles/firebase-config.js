// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4b5EVeS6B18Ac5eAaXl4c49MWMLih5Yk",
  authDomain: "jersify-cf660.firebaseapp.com",
  projectId: "jersify-cf660",
  storageBucket: "jersify-cf660.firebasestorage.app",
  messagingSenderId: "252386636144",
  appId: "1:252386636144:web:eb551615140eb9e11d5fb5",
  measurementId: "G-8WSGL6WVNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };