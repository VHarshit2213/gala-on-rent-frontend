// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQEpGjBkpOAw_rAGirVUEjIJIz_lYb58",
  authDomain: "gala-on-rent-30a6b.firebaseapp.com",
  projectId: "gala-on-rent-30a6b",
  storageBucket: "gala-on-rent-30a6b.firebasestorage.app",
  messagingSenderId: "679162840116",
  appId: "1:679162840116:web:b3c25896ae42bac8953661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);