// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrbPFFCX1j0vtvoBIRbs7zuWmWsbE9iKI",
  authDomain: "acm-light.firebaseapp.com",
  projectId: "acm-light",
  storageBucket: "acm-light.appspot.com",
  messagingSenderId: "513295027486",
  appId: "1:513295027486:web:9dabc6fe3237d8a4b4cd0f",
  measurementId: "G-1S7TNQHHRN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
//Firebase Storage
export const storage = getStorage(app)
