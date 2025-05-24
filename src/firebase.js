import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAB5XZR0FiVWBYMarX3M903IG0d0viuPs8",
  authDomain: "umrah-planner-a2ec0.firebaseapp.com",
  projectId: "umrah-planner-a2ec0",
  storageBucket: "umrah-planner-a2ec0.firebasestorage.app",
  messagingSenderId: "356209794454",
  appId: "1:356209794454:web:39ce8840debaa46cd151b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 