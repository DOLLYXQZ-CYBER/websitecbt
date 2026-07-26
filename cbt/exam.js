const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

let questions = [];

switch(subject){

case "english":
questions = englishQuestions;
break;

case "math":
questions = mathQuestions;
break;

case "physics":
questions = physicsQuestions;
break;

case "chemistry":
questions = chemistryQuestions;
break;

case "biology":
questions = biologyQuestions;
break;

default:
questions = [];
}

let currentQuestion = 0;

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question").innerHTML =
(currentQuestion + 1) + ". " + q.question;

const options = document.getElementById("options");

options.innerHTML = "";

q.options.forEach((option,index)=>{

options.innerHTML += `
<button class="option-btn"
onclick="checkAnswer(${index})">
${option}
</button>
`;

});

}

function checkAnswer(choice){

if(choice===questions[currentQuestion].answer){

alert("✅ Correct");

}else{

alert("❌ Wrong");

}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

alert("🎉 Subject Completed!");

window.location.href="index.html";

}

}

loadQuestion();
