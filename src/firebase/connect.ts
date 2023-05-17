// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAixuaSamNhUbKSoLQO-6n6qhnCMcl7xHs",
  projectId: "trading-card-game-journey",
  appId: "1:296791364410:android:d6772d39aee193af287603"
};

// Initialize Firebase
const startFirebase = ()=> initializeApp(firebaseConfig);
export default startFirebase