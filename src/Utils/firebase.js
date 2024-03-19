// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiJAS-P45RKF1-zcDL7JFWXLmvGYOxsAA",
  authDomain: "netflixgpt-51e35.firebaseapp.com",
  projectId: "netflixgpt-51e35",
  storageBucket: "netflixgpt-51e35.appspot.com",
  messagingSenderId: "472937287601",
  appId: "1:472937287601:web:252be7eb059a0ac93a3790",
  measurementId: "G-2Z9TJVEXN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();