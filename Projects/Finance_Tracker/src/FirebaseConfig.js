import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "khathabook-42ea0.firebaseapp.com",

  projectId: "khathabook-42ea0",

  storageBucket: "khathabook-42ea0.appspot.com",

  messagingSenderId: "392820920674",

  appId: "1:392820920674:web:047fab4cda76a2a8e29c3b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {fireDb, app};