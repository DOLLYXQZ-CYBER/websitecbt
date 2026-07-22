 import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful!");

      window.location.href = "dashboard.html";


    } catch (error) {

      alert(error.message);

    }

  });

}



// ================= SHOW / HIDE PASSWORD =================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword && password) {

  togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

      password.type = "text";
      togglePassword.textContent = "🙈";

    } else {

      password.type = "password";
      togglePassword.textContent = "👁️";

    }

  });

}



// ================= FORGOT PASSWORD =================

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {

  forgotPassword.addEventListener("click", async (e) => {

    e.preventDefault();


    const email = document.getElementById("email").value;


    if (!email) {

      alert("Please enter your email first.");

      return;

    }


    try {

      await sendPasswordResetEmail(auth, email);

      alert("Password reset link has been sent to your email.");

    } catch (error) {

      alert(error.message);

    }


  });

}