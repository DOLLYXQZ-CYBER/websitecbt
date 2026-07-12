// ==========================
// Smooth Fade-in Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});

// ==========================
// Navbar Shadow on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.4)";
    }

});

// ==========================
// Typing Effect
// ==========================

const text = "Your Learning & Development Partner";
let index = 0;

const title = document.querySelector(".hero h3");

if (title) {

    title.innerHTML = "";

    function typeWriter() {

        if (index < text.length) {

            title.innerHTML += text.charAt(index);
            index++;

            setTimeout(typeWriter, 80);

        }

    }

    typeWriter();

}

// ==========================
// Button Animation
// ==========================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}

// ==========================
// Welcome Message
// ==========================

setTimeout(() => {

    console.log("Welcome to TobilobaTech 🔥");

}, 1000);
