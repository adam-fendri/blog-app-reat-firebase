// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IGbvQv2Dj-7pXYK4Mcgzb2QKgACBW30",
  authDomain: "first-react-project-7d09f.firebaseapp.com",
  projectId: "first-react-project-7d09f",
  storageBucket: "first-react-project-7d09f.appspot.com",
  messagingSenderId: "465565803610",
  appId: "1:465565803610:web:141cf45771aa51fdd2a463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
