// ================================
// TOBILOBATECH ACADEMY
// PREMIUM.JS
// ================================

// Copy Account Number

const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText("7058839766");

alert("✅ Account Number Copied!");

});

}



// Submit Payment

const submitPayment = document.getElementById("submitPayment");

if (submitPayment) {

submitPayment.addEventListener("click", () => {

const email = document.getElementById("email").value.trim();

const reference = document.getElementById("reference").value.trim();

if(email === ""){

alert("Please enter your email.");

return;

}

if(reference === ""){

alert("Please enter your transaction reference.");

return;

}

alert("🎉 Payment submitted successfully!\n\nYour Premium account will be activated after payment confirmation.");

window.location.href = "payment-success.html";

});

}
