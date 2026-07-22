import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {

    if(user){

        if(userEmail){
            userEmail.textContent = user.email;
        }

    }else{

        window.location.href = "login.html";

    }

});

if(logoutBtn){

    logoutBtn.addEventListener("click", async()=>{

        try{

            await signOut(auth);

            alert("Logged out successfully!");

            window.location.href="login.html";

        }catch(error){

            alert(error.message);

        }

    });

}