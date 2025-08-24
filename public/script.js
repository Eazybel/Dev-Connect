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
const main=document.querySelector("main")
 const auth = getAuth();
 // User Card
const userCard=`
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <!-- Profile Image Placeholder -->
                <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4 border-4 border-white shadow-md">
                    <img id="image" alt="Profile Picture" class="w-full h-full object-cover">
                </div>
                <h2 id="name" class="text-xl font-semibold text-gray-800 mb-1">John Paul</h2>
                <span id="title" class="text-sm font-medium text-blue-600 mb-2">Full Stack Developer</span>
                
                <div class="w-full text-left mt-2">
                    <p id="skills" class="text-gray-600 text-sm mb-1">
                        <span  class="font-medium text-gray-700">Tech Stack:</span> 
                    </p>
                    <p id="experience" class="text-gray-600 text-sm mb-1">
                        <span  class="font-medium text-gray-700">Experience:</span>
                    </p>
                    <p id="phone" class="text-gray-600 text-sm mb-1">
                        <span  class="font-medium text-gray-700">Phone:</span> 
                    </p>
                    <p id="email" class="text-gray-600 text-sm mb-1">
                        <span  class="font-medium text-gray-700">Email:</span> 
                    </p>
                </div>
                <!-- Links & Download Button -->
                <div class="flex justify-center space-x-4 mt-4 mb-4">
                    <a id="github" href="#" class="text-gray-500 hover:text-gray-800 transition-colors duration-200" aria-label="GitHub Profile">
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                    <a id="url" href="#" class="text-gray-500 hover:text-blue-800 transition-colors duration-200" aria-label="Portfolio">
                        <i class="fa-solid fa-briefcase text-2xl"></i>
                    </a>
                    <a id="linkedin" href="#" class="text-gray-500 hover:text-blue-600 transition-colors duration-200" aria-label="LinkedIn Profile">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                </div>
                <button class="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-colors duration-200 ease-in-out hover:bg-blue-700 transform hover:scale-105 w-full">
                    See Full Profile
                </button>
            </div>`
 // state checker
onAuthStateChanged(auth, (user) => {
  if (user) {
    const email = user.email;
    btn.innerText="Profile"
     btn.onclick=()=>{
            window.location="./profile.html"
        }
        fetch("/api")
      .then(res=>{
       return res.json()
    }).then(data=>{
            for (let i = 0; i < data.length; i++) {
                 main.insertAdjacentHTML("beforeend",userCard)
            const name=document.querySelectorAll("#name")
            const image=document.querySelectorAll("#image")
            const title=document.querySelectorAll("#title")
            const email=document.querySelectorAll("#email")
            const skills=document.querySelectorAll("#skills")
            const experience=document.querySelectorAll("#experience")
            const phone=document.querySelectorAll("#phone")
            const github=document.querySelectorAll("#github")
            const url=document.querySelectorAll("#url")
            const linkedin=document.querySelectorAll("#linkedin")
           
            name[i].innerText=data[i].name
            email[i].innerText+=" "+data[i].email
            skills[i].innerText+=" "+data[i].stack
            phone[i].innerText+=" "+data[i].phone
            experience[i].innerText+=" "+data[i].experiance+" year/s"
            github[i].setAttribute("href",data[i].github)
            url[i].setAttribute("href",data[i].url)
            linkedin[i].setAttribute("href",data[i].linkedin)
             let nameInitial=name[i].innerText.split(" ")
                nameInitial=nameInitial[0][0]+nameInitial[1][0]
                image[i].setAttribute("src",`https://placehold.co/96x96/60A5FA/FFFFFF?text=${nameInitial}`)

            }
      }).catch(err=>{
        console.log(err)
      })
}else if(!user){
      btn.innerText="Log-in/Sign-up"
      fetch("/api")
      .then(res=>{
       return res.json()
    }).then(data=>{
            for (let i = 0; i < data.length; i++) {
                 main.insertAdjacentHTML("beforeend",userCard)
            const name=document.querySelectorAll("#name")
            const image=document.querySelectorAll("#image")
            const title=document.querySelectorAll("#title")
            const email=document.querySelectorAll("#email")
            const skills=document.querySelectorAll("#skills")
            const experience=document.querySelectorAll("#experience")
            const phone=document.querySelectorAll("#phone")
            const github=document.querySelectorAll("#github")
            const url=document.querySelectorAll("#url")
            const linkedin=document.querySelectorAll("#linkedin")
           
            name[i].innerText=data[i].name
            email[i].innerText+=" "+data[i].email
            skills[i].innerText+=" "+data[i].stack
            phone[i].innerText+=" "+data[i].phone
            experience[i].innerText+=" "+data[i].experiance+" year/s"
            github[i].setAttribute("href",data[i].github)
            url[i].setAttribute("href",data[i].url)
            linkedin[i].setAttribute("href",data[i].linkedin)
             let nameInitial=name[i].innerText.split(" ")
                nameInitial=nameInitial[0][0]+nameInitial[1][0]
                image[i].setAttribute("src",`https://placehold.co/96x96/60A5FA/FFFFFF?text=${nameInitial}`)

            }
      }).catch(err=>{
        console.log(err)
      })
        btn.onclick=()=>{
            window.location="./login.html"
        }
  }
});