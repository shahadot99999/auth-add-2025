// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6_U9Hi2iKM2W7oXGlup_hFNv9rUIyvM",
  authDomain: "auth-add-2025.firebaseapp.com",
  projectId: "auth-add-2025",
  storageBucket: "auth-add-2025.firebasestorage.app",
  messagingSenderId: "1083098858037",
  appId: "1:1083098858037:web:24f257b32c7080af23277c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);