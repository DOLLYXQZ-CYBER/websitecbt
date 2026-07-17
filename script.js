document.addEventListener("DOMContentLoaded", () => {

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Login system will be connected to Firebase soon!");

});

}

if(signupForm){

signupForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Signup system will be connected to Firebase soon!");

});

}

});

const forgotForm = document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Password reset will be connected to Firebase soon!");

});

}

const runBtn = document.getElementById("runBtn");

if(runBtn){

runBtn.addEventListener("click",()=>{

const code=document.getElementById("code").value;

document.getElementById("output").srcdoc=code;

});

} 

import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", () => {

    const email = prompt("Enter your email:");

    if(email){
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset link sent to your email.");
        })
        .catch((error) => {
            alert(error.message);
        });
    }

});
