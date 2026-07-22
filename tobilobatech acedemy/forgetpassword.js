import { auth } from "./firebase-config.js";

import {
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const form = document.getElementById("forgotForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    try{

        await sendPasswordResetEmail(auth, email);

        alert("✅ Password reset link has been sent to your email.");

        window.location.href = "login.html";

    }catch(error){

        alert(error.message);

    }

});