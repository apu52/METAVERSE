import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHtZH82vRvX2QmHpdmoQoiuvOOyZB8sxg",
  authDomain: "talkitapp-b47ca.firebaseapp.com",
  projectId: "talkitapp-b47ca",
  storageBucket: "talkitapp-b47ca.appspot.com",
  messagingSenderId: "225174676631",
  appId: "1:225174676631:web:f7d5acf98b7108fe59f5d2",
  measurementId: "G-SL2XGPJY9L",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
