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

console.log("Welcome to Tobiloba's Study-hub 🔥");

},1000);

/* ========================= */
/* Mobile Navigation */
/* ========================= */

.menu-toggle{
    display:none;
    font-size:28px;
    cursor:pointer;
    color:white;
}

@media (max-width:768px){

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.menu-toggle{
    display:block;
}

.nav-links{
    position:absolute;
    top:65px;
    left:0;
    width:100%;
    background:#111827;
    display:none;
    flex-direction:column;
    text-align:center;
    padding:20px 0;
}

.nav-links.active{
    display:flex;
}

.nav-links li{
    margin:15px 0;
}

header{
    padding:12px 5%;
}

.hero{
    padding-top:170px;
}

.hero h1{
    font-size:40px;
}

.hero h2{
    font-size:30px;
}

}
