// authentication imported
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
  // some modules and buttons  initiated
  const app = initializeApp(firebaseConfig);
const btn=document.getElementById("btn")
 const auth = getAuth();
 // state checker

 
onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    btn.innerText="Profile"
     btn.onclick=()=>{
            window.location="./profile.html"
        }
        fetch(`/user/${email}`)
        .then((res)=>{
            return res.json()
        }).then(data=>{
            
        })
}else if(!user){
      btn.innerText="Log-in/Sign-up"
        btn.onclick=()=>{
            window.location="./login.html"
        }
  }
});