let questions = [
    {
        question:"what does HTML stand for",
        qImg :'img/html.png',
        choiceA : 'HperText modeling language',
        choiceB : 'HperText markup language',
        choiceC : 'Hper markup language',
        correct : 'B'
    },
    {
        question: "What does CSS stand for?", 
        qImg: 'img/css.png', 
        choiceA: 'Cascading Style Sheets', 
        choiceB: 'Computer Style Sheets', 
        choiceC: 'Creative Style System', 
        correct: 'A' 
    },
    {
        question: "What does JS stand for?", 
        qImg: 'img/js.png', 
        choiceA: 'Java Standard', 
        choiceB: 'Just Script', 
        choiceC: 'JavaScript', 
        correct: 'C'
    },
    { 
        question: "What does URL stand for?", 
        qImg: 'img/html.png', 
        choiceA: 'Uniform Resource Locator', 
        choiceB: 'Universal Resource Link', 
        choiceC: 'Uniform Reference Locator', 
        correct: 'A' 
    },
    { 
        question: "What does HTTP stand for?", 
        qImg: 'img/html.png', 
        choiceA: 'HyperText Transmission Protocol',
        choiceB: 'Hyper Transfer Text Protocol', 
        choiceC: 'HyperText Transfer Protocol', 
        correct: 'C' 
    },
    { 
        question: "What does DOM stand for?", 
        qImg: 'img/html.png', 
        choiceA: 'Document Object Model', 
        choiceB: 'Data Object Model', 
        choiceC: 'Document Order Model', 
        correct: 'A' 
    }
]

const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const qimage = document.getElementById('qImage');
const question = document.getElementById('question');
const counter = document.getElementById('counter');
const timeGauge = document.getElementById('timeGauge');
const ChoiceA = document.getElementById('A');
const ChoiceB = document.getElementById('B');
const ChoiceC = document.getElementById('C');
const progress = document.getElementById('progress');
const scoreContainer = document.getElementById('scoreContainer');

let lastQuestionsIndex = questions.length - 1;
let runingQuestion = 0;
const questionTime = 10;
const gaugeTime = 150;
let count;
let score = 0;
let TIMER = setInterval(counterRender, 1000)
const gaugeProgressUnit = gaugeTime / questionTime;


function randomQuestion(){
    const q = questions[runingQuestion];
    qimage.innerHTML ="<img src = " + q.qImg + ">"
    question.innerHTML = "<p>" + q.question + "</p>";
    ChoiceA.innerHTML = q.choiceA;
    ChoiceB.innerHTML = q.choiceB;
    ChoiceC.innerHTML = q.choiceC;
}

function progressRender(){
    for(let qindex = 0; qindex <= lastQuestionsIndex; qindex++){
        progress.innerHTML += "<div class='prog' id=" + qindex + "></div>"
    }
}

function answerIsCorrect(){
    document.getElementById(runingQuestion).style.backgroundColor = 'green';
}

function answerIsFalse(){
    document.getElementById(runingQuestion).style.backgroundColor = 'red';
}

function counterRender(){
    if(count<=questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++
    }
    else{
        count = 0;
        answerIsFalse()
        if(runingQuestion < lastQuestionsIndex){
            runingQuestion++;
            randomQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender()
        }
    }
}


function checkAnswer(answer){
    if(answer == questions[runingQuestion].correct){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsFalse();
    }
    count = 0;
    if(runingQuestion < lastQuestionsIndex){
        runingQuestion++;
        randomQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender()
    }
}


function scoreRender(){
    scoreContainer.style.display = "block";
    let totalPercent  = Math.round(100 * score / questions.length)
    let img = totalPercent >= 80 ? "img/5.png" : totalPercent >= 60 ? "img/4.png":
    totalPercent >= 40 ? "img/3.png" : totalPercent >= 20 ? "img/2.png" : "img/1.png"
    scoreContainer.innerHTML = "<img src =" + img + ">"
    scoreContainer.innerHTML += "<p>" + totalPercent + "%</p>"
}

start.addEventListener('click', startQuiz);
function startQuiz(){
    start.style.display = "none";
    randomQuestion()
    quiz.style.display = "block";
    progressRender()
    counterRender()

}