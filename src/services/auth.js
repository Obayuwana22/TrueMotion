// import { initializeApp } from "firebase/app";
// import {
//   // browserLocalPersistence,
//   getAuth,
//   GoogleAuthProvider,
//   // setPersistence,
// } from "firebase/auth";
// import { collection,  getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBtSRFbYmyYFoLawQLhUKlSB7T7y7OC6VM",
//   authDomain: "true-motion-23319.firebaseapp.com",
//   projectId: "true-motion-23319",
//   storageBucket: "true-motion-23319.firebasestorage.app",
//   messagingSenderId: "437798758109",
//   appId: "1:437798758109:web:26fb1f2ab4efaec7d3dd34",
//   measurementId: "G-VJS40PSELV",
// };

// // initialize firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// // Collection Ref
// export const colRef = collection(db, "users");

// // initialize Auth
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// // setPersistence(auth, browserLocalPersistence)
// //   .then(() => {
// //     console.log("Persistence set to local");
// //   })
// //   .catch((error) => {
// //     console.error("Failed to set persistence:", error);
// //   });
