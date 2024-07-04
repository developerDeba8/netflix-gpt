// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXA5t5g5XLmTL39ZwIp0MSdbTwkT1-5s",
  authDomain: "netflixgpt-a15ae.firebaseapp.com",
  projectId: "netflixgpt-a15ae",
  storageBucket: "netflixgpt-a15ae.appspot.com",
  messagingSenderId: "1017046181415",
  appId: "1:1017046181415:web:06de1cf2eb752b334dd002",
  measurementId: "G-5BS8T8MR37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
