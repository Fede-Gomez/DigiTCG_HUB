import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_iHjadECnpGmqfZp02CLD4Iy-IPv6tzw",
  authDomain: "trading-card-game-journey.firebaseapp.com",
  projectId: "trading-card-game-journey",
  storageBucket: "trading-card-game-journey.appspot.com",
  messagingSenderId: "296791364410",
  appId: "1:296791364410:web:815796a17a8c0722287603",
  measurementId: "G-X6XH1KG6Q8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)