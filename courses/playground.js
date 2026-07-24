const runBtn = document.getElementById("runBtn");
const code = document.getElementById("code");
const output = document.getElementById("output");

runBtn.addEventListener("click", () => {
    output.srcdoc = code.value;
});
