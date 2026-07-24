const params = new URLSearchParams(window.location.search);
const subject = params.get("subject") || "english";

document.getElementById("subjectTitle").textContent =
subject.toUpperCase() + " JAMB CBT";

const questions = {

english: [
{
question: "Choose the correctly spelt word.",
options: [
"Accomodation",
"Accommodation",
"Acomodation",
"Accommmodation"
],
answer: 1
},
{
question: "The opposite of BRAVE is?",
options: [
"Strong",
"Fearful",
"Happy",
"Wise"
],
answer: 1
}
],

math: [
{
question: "2 + 3 = ?",
options: [
"4",
"5",
"6",
"7"
],
answer: 1
},
{
question: "12 × 2 = ?",
options: [
"22",
"24",
"26",
"20"
],
answer: 1
}
],

physics: [
{
question: "SI unit of Force is?",
options: [
"Newton",
"Joule",
"Watt",
"Volt"
],
answer: 0
}
],

chemistry: [
{
question: "Water is made up of?",
options: [
"H₂O",
"CO₂",
"O₂",
"H₂"
],
answer: 0
}
],

biology: [
{
question: "Powerhouse of the cell?",
options: [
"Nucleus",
"Mitochondria",
"Ribosome",
"Golgi body"
],
answer: 1
}
]

};

let current = 0;
let score = 0;

const questionBox = document.getElementById("question");
const answersBox = document.getElementById("answers");

function loadQuestion(){

const q = questions[subject][current];

questionBox.innerHTML =
`${current+1}. ${q.question}`;

answersBox.innerHTML = "";

q.options.forEach((option,index)=>{

const btn = document.createElement("button");

btn.className="option";

btn.innerHTML=option;

btn.onclick=()=>{

if(index===q.answer){
score++;
}

current++;

if(current<questions[subject].length){

loadQuestion();

}else{

questionBox.innerHTML="🎉 Exam Finished";

answersBox.innerHTML=`
<h2>Your Score</h2>
<h1>${score}/${questions[subject].length}</h1>
`;

document.getElementById("nextBtn").style.display="none";
document.getElementById("prevBtn").style.display="none";
document.getElementById("submitBtn").style.display="none";

}

};

answersBox.appendChild(btn);

});

}

loadQuestion();

document.getElementById("submitBtn").onclick=()=>{

alert(`Your score is ${score}/${questions[subject].length}`);

};
