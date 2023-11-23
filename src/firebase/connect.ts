// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY8qAHXZ3T1HVeD34miWn5Tl3EwjoKvNc",
  authDomain: "digitcghub.firebaseapp.com",
  projectId: "digitcghub",
  storageBucket: "digitcghub.appspot.com",
  messagingSenderId: "1072600977089",
  appId: "1:1072600977089:web:0cb4459abf3f0fb0a0ce40"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// Initialize Firebase