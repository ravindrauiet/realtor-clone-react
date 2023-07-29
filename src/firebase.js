// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOfJKWWzm6o-eC7tALCyuXAnXcFgwdcW8",
  authDomain: "realtor-clone-react-1b812.firebaseapp.com",
  projectId: "realtor-clone-react-1b812",
  storageBucket: "realtor-clone-react-1b812.appspot.com",
  messagingSenderId: "360278389596",
  appId: "1:360278389596:web:5defd792bb5cbf809f0799"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();