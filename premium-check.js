import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    const docRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {

        alert("User data not found.");
        window.location.href = "dashboard.html";
        return;

    }

    const data = docSnap.data();

    if (!data.premium) {

        alert("🔒 This is a Premium lesson.");

        window.location.href = "premium.html";

    }

});
