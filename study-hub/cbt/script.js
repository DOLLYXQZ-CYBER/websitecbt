const questions = [
{
    question: "What is 5 + 7 ?",
    options: ["10", "12", "13", "15"],
    answer: 1
},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
},
{
    question: "What is the capital of Nigeria?",
    options: ["Lagos", "Kano", "Abuja", "Ibadan"],
    answer: 2
},
{
    question: "Who wrote 'Things Fall Apart'?",
    options: [
        "Wole Soyinka",
        "Chinua Achebe",
        "Ben Okri",
        "Ngugi wa Thiong'o"
    ],
    answer: 1
},
{
    question: "The chemical symbol for Gold is?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: 1
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("score");

function loadQuestion(){

    selectedAnswer = null;

    question.textContent =
        questions[currentQuestion].question;

    answers.innerHTML = "";

    questions[currentQuestion].options.forEach((option,index)=>{

        const btn = document.createElement("button");

        btn.className = "option";

        btn.textContent = option;

        btn.onclick = ()=>selectAnswer(btn,index);

        answers.appendChild(btn);

    });

}

function selectAnswer(button,index){

    document.querySelectorAll(".option").forEach(btn=>{

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedAnswer = index;

}

nextBtn.onclick = function(){

    if(selectedAnswer===null){

        alert("Please select an answer.");

        return;

    }

    if(selectedAnswer===questions[currentQuestion].answer){

        score++;

    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }else{

        showScore();

    }

}

function showScore(){

    question.innerHTML =
    "🎉 CBT Completed!";

    answers.innerHTML = "";

    nextBtn.style.display = "none";

    scoreBox.innerHTML =
    "Your Score: " +
    score +
    " / " +
    questions.length;

}

loadQuestion();

let time = 60;

const timer = setInterval(()=>{

    time--;

    document.getElementById("time").textContent = time;

    if(time<=0){

        clearInterval(timer);

        showScore();

    }

},1000);