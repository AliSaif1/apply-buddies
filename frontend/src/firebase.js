// Import the client-side Firebase SDK for frontend use
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBmi2vVNCRSKPB3j2hK4wJPymcLNz3ytJ0",
  authDomain: "apply-214de.firebaseapp.com",
  projectId: "apply-214de",
  storageBucket: "apply-214de.firebasestorage.app",
  messagingSenderId: "982991075527",
  appId: "1:982991075527:web:ca99d488cdd4991af4e6e2",
  measurementId: "G-Y2GW29JN5G"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, serverTimestamp, query, orderBy, onSnapshot };