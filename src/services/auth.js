import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "true-motion-23319.firebaseapp.com",
  projectId: "true-motion-23319",
  storageBucket: "true-motion-23319.firebasestorage.app",
  messagingSenderId: "437798758109",
  appId: "1:437798758109:web:26fb1f2ab4efaec7d3dd34",
  measurementId: "G-VJS40PSELV",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
