// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnaE5PJG0qRt5OpryRT9g91P1OEyajKCw",
  authDomain: "personal-website-71391.firebaseapp.com",
  projectId: "personal-website-71391",
  storageBucket: "personal-website-71391.appspot.com",
  messagingSenderId: "11464332638",
  appId: "1:11464332638:web:989e2c54ed028c0a732bcf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
