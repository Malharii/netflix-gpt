// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo4ZppHNHQK8SQS-didkN8cxGqJYbxlFI",
  authDomain: "netflixgpt-ea537.firebaseapp.com",
  projectId: "netflixgpt-ea537",
  storageBucket: "netflixgpt-ea537.appspot.com",
  messagingSenderId: "240077855113",
  appId: "1:240077855113:web:c7f5c555e47eb0ef2c2958",
  measurementId: "G-8741G79BZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
