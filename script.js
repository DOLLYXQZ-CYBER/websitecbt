```javascript
// ===============================
// TobilobaTech Academy Script
// ===============================


// Smooth scrolling for navigation links

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if(section){
            section.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});




// Card button messages

const buttons = document.querySelectorAll(".card button");


buttons.forEach(button => {

    button.addEventListener("click", function(){

        alert(
            "This feature is coming soon to TobilobaTech Academy 🚀"
        );

    });

});




// Welcome message

console.log(
    "Welcome to TobilobaTech Academy 🚀"
);
```
