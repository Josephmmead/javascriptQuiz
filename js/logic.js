var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hot Tub Malfunction Light", "Hypertext Markup Language", "Hot Text Manipulation Lanuage", "Hotel Teleport Marketing Language"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "questions #2",
        choices: ["Java", "Ruby", "Python", "Javascript"],
        answer: "Javascript",
    },
    {
        question: "questions #3",
        choices: ["Java", "Ruby", "Python", "Javascript"],
        answer: "Javascript",
    },
    {
        question: "questions #4",
        choices: ["Java", "Ruby", "Python", "Javascript"],
        answer: "Javascript",
    },

]


var currentQuestionIndex = 0;
var timer = $("#time");
var score = 0;
var currentAnswer = questions[currentQuestionIndex].answer;
let selection;



$("#start").on("click", function(){
    startQuiz();   
});

function startQuiz() {
    var startScreenEl = document.getElementById("startScreen");
    // hide start screen once start button is clicked
    
    startScreenEl.classList.add('hide');

    // start timer upon clicking "Start Quiz"

    getQuestion();
   
};

function getQuestion() {
    $('#questionHeader').empty();
    $('#choices').empty();

    var currentQuestion = questions[currentQuestionIndex].question;
    var currentChoices = questions[currentQuestionIndex].choices;
    currentAnswer = questions[currentQuestionIndex].answer

    var headerElement = document.getElementById("questionHeader");
    headerElement.textContent = currentQuestion.question;

    var choicesElement = document.getElementById("choices");
    
    
   for( i = 0; i < currentChoices.length; i++) {
    var choiceSelection = document.createElement("button");
        choiceSelection.setAttribute("class", "choice-btn");
        choiceSelection.setAttribute("value", currentChoices[i]);

        choiceSelection.textContent = i + 1 + ". " + currentChoices[i];

        

        choicesElement.appendChild(choiceSelection);
        
    };
    headerElement.append(currentQuestion);
    
    
};
// $(document).on()"click",".end-btn", function(){

$(document).on("click",".choice-btn", function(){
    selection = this.value;

    if (selection !== currentAnswer) {
        alert("Wrong");
        currentQuestionIndex= currentQuestionIndex + 1;
        getQuestion();
        
    } else {
        score = score + 10;
        alert("Correct! Your current score is " +score)
        currentQuestionIndex= currentQuestionIndex + 1;
        getQuestion(); };

});