import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiNMWrctONAJK2dPUczpU031BIKxP2In0",
  authDomain: "libelulis.firebaseapp.com",
  projectId: "libelulis",
  storageBucket: "libelulis.appspot.com",
  messagingSenderId: "588591499894",
  appId: "1:588591499894:web:3afb51fcb787e4221fed57",
  measurementId: "G-XDY1XJZZNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
