
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for Firestore
// import { getDatabase } from "firebase/database"; // for Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBYqdQpXHDasFZJiDK4yoaE0fZITBfx49o",
  authDomain: "sancet-e0afa.firebaseapp.com",
  databaseURL: "https://sancet-e0afa-default-rtdb.firebaseio.com",
  projectId: "sancet-e0afa",
  storageBucket: "sancet-e0afa.firebasestorage.app",
  messagingSenderId: "804564299842",
  appId: "1:804564299842:web:093701da79094c615bbddb",
  measurementId: "G-MEW9EE68CC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // for Firestore
// const database = getDatabase(app); // for Realtime Database

export default db ;
