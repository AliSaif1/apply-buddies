// Import the client-side Firebase SDK for frontend use
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

// Your Firebase config object
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, serverTimestamp, query, orderBy, onSnapshot };