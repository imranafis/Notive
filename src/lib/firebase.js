import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGr3KWUfUZeq2RE399IM6N40pj5r9J2PY",
  authDomain: "notive-cloud.firebaseapp.com",
  projectId: "notive-cloud",
  storageBucket: "notive-cloud.appspot.com",
  messagingSenderId: "623580052918",
  appId: "1:623580052918:web:d99045f0c4252ca0465517",
  measurementId: "G-VWRFV1Z8ZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
