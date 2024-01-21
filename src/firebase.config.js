import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAHXjY0Se7__8wM9Ydey7cSpgmyFRdyB0A",
  authDomain: "social-e6f25.firebaseapp.com",
  projectId: "social-e6f25",
  storageBucket: "social-e6f25.appspot.com",
  messagingSenderId: "986659905802",
  appId: "1:986659905802:web:dfd36072b399590be41af3",
  measurementId: "G-HGSW158PHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB, txtDB}