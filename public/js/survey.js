
const questionDisplay = document.getElementById("questionDisplay");
const questionDisplayContainer = document.querySelector(".questionContainer");
const questionNumberLabel = document.getElementById("questionNumber");
const option1 = document.querySelector(".choiceA");
const option2 = document.querySelector(".choiceB");
const option3 = document.querySelector(".choiceC");
const feedbackDisplay = document.querySelector(".feedback");
const nextBut = document.querySelector(".nextButton");
const scoreDisplay = document.querySelector(".scoreLabel");
const scoreTotalLabel = document.getElementById("scoreTotalLabel");
const index = [0, 1, 2, 3, 4, 5, 6];
const numberOfQuestions = 7;
let activeQuestion = 0;
let score = 0;

// Shuffle index function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //shorthand array[i] = array[j]. array[j] = array[i]
        [array[i], array[j]] = [array[j], array[i]];        
    }
    return array;
}

let shuffledIndex = shuffleArray(index);

function resetQuestion() {
    questionNumberLabel.innerHTML = "Q" + (activeQuestion+1) + ". ";
    
    if (activeQuestion < numberOfQuestions) {
        questionDisplay.innerHTML = questionBank[shuffledIndex[activeQuestion]].question;
        option1.innerHTML = questionBank[shuffledIndex[activeQuestion]].choiceA;
        option2.innerHTML = questionBank[shuffledIndex[activeQuestion]].choiceB;
        option3.innerHTML = questionBank[shuffledIndex[activeQuestion]].choiceC;
    }
    else {
        alert("Game Over");
    } 
}

function highlightSelectionCSS(answer) {
    if (answer == "A") {
        option2.classList.add("dim");
        option3.classList.add("dim");
    }
    else if (answer == "B") {
        option1.classList.add("dim");
        option3.classList.add("dim");
    }
    else {
        option1.classList.add("dim");
        option2.classList.add("dim");
    }
}

function toggleFeedbackCSS(feedback) {
    if (feedback == "Correct") {
        feedbackDisplay.classList.add("feedbackCorrect");
        questionDisplayContainer.classList.add("feedbackCorrect");
    }
    else {
        feedbackDisplay.classList.add("feedbackWrong");
        questionDisplayContainer.classList.add("feedbackWrong");
    }
    feedbackDisplay.innerHTML = feedback;
    feedbackDisplay.classList.toggle("visible");
}

function toggleNextButCSS() {
    nextBut.classList.toggle("visible");
    nextBut.classList.toggle("hidden");
}

// function checkAnswer(answer){

//     if (answer == questionBank[shuffledIndex[activeQuestion]].correct){
//         activeQuestion++;
//         score++;
//         toggleFeedbackCSS("Correct");
//         toggleNextButCSS();
//     }
//     else {
//         activeQuestion++;
//         toggleFeedbackCSS("Wrong");
//         toggleNextButCSS();
//     }
    
//     highlightSelectionCSS(answer)
 
//     scoreTotalLabel.innerHTML = score;
//     scoreDisplay.classList.remove("hidden");
// }

// function resetButtonColoursCSS() {
//     option1.classList.remove("dim");
//     option2.classList.remove("dim");
//     option3.classList.remove("dim");
//     feedbackDisplay.classList.remove("feedbackCorrect");
//     feedbackDisplay.classList.remove("feedbackWrong");
//     questionDisplayContainer.classList.remove("feedbackCorrect");
//     questionDisplayContainer.classList.remove("feedbackWrong");
// }

function nextQuestion() {
    toggleFeedbackCSS();
    toggleNextButCSS();
    resetButtonColoursCSS();
    resetQuestion();
}

function init() {
    // feedbackDisplay.classList.add("hidden");
    // nextBut.classList.add("hidden");
    // scoreDisplay.classList.add("hidden");
    // resetQuestion();
}

window.onload = init;

