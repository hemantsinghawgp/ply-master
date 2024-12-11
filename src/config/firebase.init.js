// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pRA6B4YvyezfIx4GHBlf52sNp2qQuo4",
  authDomain: "ply-master.firebaseapp.com",
  projectId: "ply-master",
  storageBucket: "ply-master.firebasestorage.app",
  messagingSenderId: "911801403344",
  appId: "1:911801403344:web:f55a0c37fe80c6a1e69bd5",
  measurementId: "G-Q6WNCD114R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);