import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtRgoKGJuQYT-06qkwntcEii_vJYohBXc",
  authDomain: "proyectofinal-b5915.firebaseapp.com",
  projectId: "proyectofinal-b5915",
  storageBucket: "proyectofinal-b5915.appspot.com",
  messagingSenderId: "899657886759",
  appId: "1:899657886759:web:d68fde023fde347380b202"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)