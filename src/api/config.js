// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5MPdYbJvvT3ZJewoonjmPishPkpTcIhw",
  authDomain: "react-61d36.firebaseapp.com",
  projectId: "react-61d36",
  storageBucket: "react-61d36.appspot.com",
  messagingSenderId: "581689868133",
  appId: "1:581689868133:web:1262859505405ddbd32b8c",
  measurementId: "G-JYEVBZ3H9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore();