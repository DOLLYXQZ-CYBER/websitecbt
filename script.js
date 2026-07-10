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

        header.style.boxShadow = "none";

    }

});

// ==========================
// Typing Effect
// ==========================

const text = "Future Web Developer";
let index = 0;

const title = document.querySelector(".hero h3");

title.innerHTML = "";

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();

// ==========================
// Button Animation
// ==========================

const button = document.querySelector("button");

button.addEventListener("mouseover",()=>{

button.style.transform="scale(1.1)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

// ==========================
// Welcome Message
// ==========================

setTimeout(()=>{

console.log("Welcome to Tobiloba's Portfolio 🔥");

},1000);