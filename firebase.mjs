// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1WMgW0jMsWJBNSKcCYN0F4FdvjiDz7eE",
  authDomain: "fir-e7ffb.firebaseapp.com",
  projectId: "fir-e7ffb",
  storageBucket: "fir-e7ffb.appspot.com",
  messagingSenderId: "361643856203",
  appId: "1:361643856203:web:a2c0a038a33609dcc4d8ce",
  measurementId: "G-FK76ST953P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
