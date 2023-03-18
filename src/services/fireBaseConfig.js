// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1ZLADQ01ElTZKGs83VFJYLd4h29gk64",
  authDomain: "onthego-84a8d.firebaseapp.com",
  projectId: "onthego-84a8d",
  storageBucket: "onthego-84a8d.appspot.com",
  messagingSenderId: "198838599364",
  appId: "1:198838599364:web:5114c31c67bc497587d391",
  measurementId: "G-NSWR6S2NV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth,db };