// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHlTVxMwqkHkKZlPF2_K3L7mU9dc02vtM",
  authDomain: "connection-demo-13afb.firebaseapp.com",
  projectId: "connection-demo-13afb",
  storageBucket: "connection-demo-13afb.appspot.com",
  messagingSenderId: "900961390456",
  appId: "1:900961390456:web:e71939dc9f96c14b29828d",
  measurementId: "G-0KCYMYG0P9",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
