var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hot Tub Malfunction Light", "Hypertext Markup Language", "Hot Text Manipulation Lanuage", "Hotel Teleport Marketing Language"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "What brakets do you use for an array?",
        choices: ["() ", "{}", "[]", "<>"],
        answer: "[]",
    },
    {
        question: "Which one is not a main language in web development?",
        choices: ["HTML", "CSS", "PHP", "Javascript"],
        answer: "PHP",
    },
    {
        question: "What is an API?",
        choices: ["Application Programming Interface", "Apple Pie Intervention", "Application Progress Interface", "Advanced Processing Information"],
        answer: "Application Programming Interface",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<js>", "<javascript>", "<script>"],
        answer: "<script>",
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)",
    },
    {
        question: "How does a FOR loop start?",
        choices: ["for (i = 0; i <+5)", "for (i <+5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        answer: "for (i = 0; i <= 5; i++)",
    },
]


var currentQuestionIndex = 0;
let timer = 70;
let score = 0 ;
var currentAnswer = questions[currentQuestionIndex].answer;
let selection;

var gameOver = false;




// Onclick for the start button
$("#start").on("click", function(){
    startQuiz();   

    var countdownTimer = setInterval(function(){
        endGame();
        if(timer <= 0 || gameOver)
            clearInterval(countdownTimer);  
        timer--;
        document.getElementById("time").textContent = timer;
        },1000);
});

function startQuiz() {
    var startScreenEl = document.getElementById("startScreen");


    // hide start screen once start button is clicked
    startScreenEl.classList.add('hide');
    

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


$(document).on("click",".choice-btn", function(){
    selection = this.value;
    
    if (selection !== currentAnswer) {
        alert("Wrong");
        timer -= 5;
        currentQuestionIndex= currentQuestionIndex + 1;
        endGame();
        getQuestion();
        
    } else {
         score = score + 10;
        alert("Correct! Your current score is " + score);
        currentQuestionIndex= currentQuestionIndex + 1;
        getQuestion(); };
});

function endGame(){
if(currentQuestionIndex >= questions.length || timer <= 0){
    
    $("#questions").addClass("hide");
    $("#endScreen").removeClass("hide");
   
    $("#final-score").text(score);
    gameOver = true;
    };
};


$("#submit").on("click", function(){

    event.preventDefault();

    let initials = $("#initials").val();
    let user = {
        player: initials,
        highscore: score,
    };

    var userscore = JSON.parse(window.localStorage.getItem("userscore")) || [];

    
    if (initials === ""){
        alert("Please enter your initials.")
    }else {
        alert("Your score has been logged.")
        userscore.push(user);
        localStorage.setItem(userscore, JSON.stringify("userscore"));
        $("#random").text("username: " + user.player + " userscore: " + score);
    };  
    

    userscore.sort((a,b) => b.score - a.score)

    var array = userscore.splice(0,5);
    let userscoreList = $("#list");
    userscore.push("random", JSON.stringify(userscore));
    userscoreList.innerHTML= array.map(user => {
        return `<li class="list-group-item">${user.player}-${user.userscore}</li>`
    }).join("");
    userscoreList.append("Your score: " + playerName + "-" + currentScore)

});

