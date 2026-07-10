// Scroll to the Subjects section
function scrollToSubjects() {
    document.getElementById("subjects").scrollIntoView({
        behavior: "smooth"
    });
}

// Open a subject
function openSubject(subject) {

    alert(
        "📚 Welcome to " +
        subject +
        "!\n\n" +
        "Lessons, quizzes and CBT practice for " +
        subject +
        " are coming soon!"
    );

}

// Simple fade animation when scrolling
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// Welcome message
window.onload = () => {

    console.log("Welcome to TobiTech Study Hub 🚀");

};