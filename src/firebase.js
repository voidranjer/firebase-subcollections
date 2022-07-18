// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDASz6suHsVpHisNPIfG-3YgxEW7yTDmtw",
  authDomain: "fir-contact-form-54f3f.firebaseapp.com",
  projectId: "fir-contact-form-54f3f",
  storageBucket: "fir-contact-form-54f3f.appspot.com",
  messagingSenderId: "825262049120",
  appId: "1:825262049120:web:18e411877b791437a24005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
