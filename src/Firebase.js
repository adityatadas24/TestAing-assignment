// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4IZanX3bTYWOUGcr0yl3-zZjeVVWQRS8",
  authDomain: "simplenotes-clone.firebaseapp.com",
  projectId: "simplenotes-clone",
  storageBucket: "simplenotes-clone.appspot.com",
  messagingSenderId: "965971550831",
  appId: "1:965971550831:web:34a07085f32b25df8d639a",
  measurementId: "G-5TGF50GVGQ",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app);

export { db };
