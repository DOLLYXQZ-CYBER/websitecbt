const display = document.getElementById("display");

// Add numbers/operators
function append(value){
    display.value += value;
}

// Clear everything
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate(){

    if(display.value === ""){
        return;
    }

    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        },1000);
    }

}

// Keyboard support
document.addEventListener("keydown", function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        append(key);
    }

    else if(key === "Enter"){
        event.preventDefault();
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }

});