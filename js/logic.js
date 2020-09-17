var currentQuestionIndex = 0



function startQuiz() {
    var startScreenEl = document.getElementById("startScreen")

    // hide start screen once start button is clicked

    // start timer upon clicking "Start Quiz"

    getQuestion()
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var currentChoices = questions[currentQuestionIndex].choices

    var titleElement = document.getElementById("question-title")
    titleElement.textContent = currentQuestion.question

    var choicesElement = document.getElementById("choices")
    console.log(currentChoices)

   for(var i = 0; i < currentChoices.length; i++) {
        var choiceSelection = document.createElement("button")
        choiceSelection.setAttribute("class", "choice")
        choiceSelection.setAttribute("value", currentChoices[i])

        choiceSelection.textContent = i + 1 + ". " + currentChoices[i]

        choicesElement.appendChild(choiceSelection)
    }
}

// Here is where you will define an onclick to run the startQuiz function