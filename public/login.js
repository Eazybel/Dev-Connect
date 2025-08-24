import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCoUP2wCcV9LJjOpIk96N_xouRG1xywrzo",
    authDomain: "devs-1d8a1.firebaseapp.com",
    projectId: "devs-1d8a1",
    storageBucket: "devs-1d8a1.firebasestorage.app",
    messagingSenderId: "776363286429",
    appId: "1:776363286429:web:98e45a1378438b50d89974"
  };
  const app = initializeApp(firebaseConfig);
const btn=document.getElementById("btn")
btn.onclick=(e)=>{
e.preventDefault()
const email=document.getElementById("email").value
const password=document.getElementById("password").value
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("logged in")
    window.location="./index.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}