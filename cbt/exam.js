const questions=[

{

question:"HTML stands for?",

options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language"
],

answer:0

},

{

question:"CSS stands for?",

options:[
"Cascading Style Sheets",
"Creative Style Sheets",
"Computer Style Sheets",
"Coding Style Sheets"
],

answer:0

},

{

question:"JavaScript is used for?",

options:[
"Making pages interactive",
"Creating databases",
"Creating Operating Systems",
"None"
],

answer:0

}

];

let current=0;

const question=document.getElementById("question");

const options=document.getElementById("options");

const next=document.getElementById("nextBtn");

const currentQuestion=document.getElementById("currentQuestion");

const totalQuestions=document.getElementById("totalQuestions");

totalQuestions.innerHTML=questions.length;

function loadQuestion(){

const q=questions[current];

question.innerHTML=q.question;

currentQuestion.innerHTML=current+1;

options.innerHTML="";

q.options.forEach(option=>{

const btn=document.createElement("button");

btn.className="subject-btn";

btn.style.marginBottom="15px";

btn.style.width="100%";

btn.innerHTML=option;

options.appendChild(btn);

});

}

next.onclick=()=>{

current++;

if(current<questions.length){

loadQuestion();

}else{

document.querySelector(".exam-box").innerHTML=

`

<h1>🎉 CBT Completed</h1>

<h2>Well Done!</h2>

<a href="index.html" class="subject-btn">

Back Home

</a>

`;

}

}

loadQuestion();

let seconds=7200;

setInterval(()=>{

seconds--;

let h=Math.floor(seconds/3600);

let m=Math.floor((seconds%3600)/60);

let s=seconds%60;

document.getElementById("timer").innerHTML=

String(h).padStart(2,"0")+":"+

String(m).padStart(2,"0")+":"+

String(s).padStart(2,"0");

},1000);
