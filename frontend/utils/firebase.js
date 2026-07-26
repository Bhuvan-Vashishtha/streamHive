// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "streamhive-71d26.firebaseapp.com",
  projectId: "streamhive-71d26",
  storageBucket: "streamhive-71d26.firebasestorage.app",
  messagingSenderId: "440788654920",
  appId: "1:440788654920:web:4cfe7a66e35cacd2b1317d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}