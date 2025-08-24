import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
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
const name=document.getElementById("name").value
const email=document.getElementById("email").value
const pass1=document.getElementById("pass1").value
const password=document.getElementById("pass2").value
const phone=document.getElementById("phone").value
const stack=document.getElementById("stack").value
const experience=document.getElementById("experience").value
const github=document.getElementById("github-url").value
const url=document.getElementById("portfolio-url").value
const linkedin=document.getElementById("linkedin-url").value
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Registered Sucessfully")
    window.location="./login.html"
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
fetch("/",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        name:name,
        email:email,
        password:password,
        phone:phone,
        stack:stack,
        experience:experience,
        github:github,
        url:url,
        linkedin:linkedin
    })
})
.then(()=>{
    window.location="./login.html"
}).catch(err=>{
    console.log(err)
})
conosle.log(email,password)
}