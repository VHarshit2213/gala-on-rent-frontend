// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjofuTQne_KdU3mf3y0J0RgJOg2Y2P18M",
  authDomain: "gala-on-rent.firebaseapp.com",
  projectId: "gala-on-rent",
  storageBucket: "gala-on-rent.firebasestorage.app",
  messagingSenderId: "289387926411",
  appId: "1:289387926411:web:2046436642fc31b3eed58e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);