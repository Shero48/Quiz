
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for Firestore
// import { getDatabase } from "firebase/database"; // for Realtime Database

const firebaseConfig = {
  apiKey: "firebase_apikey",
  authDomain: "domain name",
  databaseURL: "database_url",
  projectId: "pro_id",
  storageBucket: "store___",
  messagingSenderId: "sen_id",
  appId: "app_id",
  measurementId: "mes"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // for Firestore
// const database = getDatabase(app); // for Realtime Database

export default db ;
