// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_iHjadECnpGmqfZp02CLD4Iy-IPv6tzw",
  authDomain: "trading-card-game-journey.firebaseapp.com",
  projectId: "trading-card-game-journey",
  storageBucket: "trading-card-game-journey.appspot.com",
  messagingSenderId: "296791364410",
  appId: "1:296791364410:web:1a8686baa0b97236287603",
  measurementId: "G-QRQQXDJ9FS"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const analytics = getAnalytics(app);

// Initialize Firebase