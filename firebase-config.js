// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyC5Dho3fjZXsWaV445EVM_8joLGy93uXsc",

  authDomain: "tobilobatech-academy.firebaseapp.com",

  projectId: "tobilobatech-academy",

  storageBucket: "tobilobatech-academy.firebasestorage.app",

  messagingSenderId: "594289757305",

  appId: "1:594289757305:web:23be652337adf208dd98a8",

  measurementId: "G-WKBYEY9NT2"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { auth, db };