import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCoUP2wCcV9LJjOpIk96N_xouRG1xywrzo",
    authDomain: "devs-1d8a1.firebaseapp.com",
    projectId: "devs-1d8a1",
    storageBucket: "devs-1d8a1.firebasestorage.app",
    messagingSenderId: "776363286429",
    appId: "1:776363286429:web:98e45a1378438b50d89974"
  };
  const save = document.getElementById('save');
const image = document.getElementById('change-photo-btn');
const name = document.getElementById('edit-name');
const uploader = document.getElementById('profile-upload');
const email = document.getElementById('edit-email');
const experience = document.getElementById('edit-experience');
const stack = document.getElementById('edit-stack');
const github = document.getElementById('edit-github');
const linkedin = document.getElementById('edit-linkedin');
const url = document.getElementById('edit-url');
   const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        const email=user.email
      
    })