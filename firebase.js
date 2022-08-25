// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDM0GlsjHqcEHPsQ5qwmnLWvK0TOODmER8",
    authDomain: "my-twitter-7ca21.firebaseapp.com",
    projectId: "my-twitter-7ca21",
    storageBucket: "my-twitter-7ca21.appspot.com",
    messagingSenderId: "948808958028",
    appId: "1:948808958028:web:bf55642f15deb5a5c234e9",
    measurementId: "G-PG5RD5H7CC"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };