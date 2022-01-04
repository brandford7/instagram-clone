// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsh5QDyQZyA3wyBx9Si-xy1aTwlYVr4D8",
  authDomain: "instagram-ebaf9.firebaseapp.com",
  projectId: "instagram-ebaf9",
  storageBucket: "instagram-ebaf9.appspot.com",
  messagingSenderId: "353747348425",
  appId: "1:353747348425:web:ca3edb2fd4636085881618",
  measurementId: "G-MPQNK6E358",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const analytics = getAnalytics(app);
const storage = getStorage();

export{db,app,storage}
