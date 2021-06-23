// Variables
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var feedback = document.querySelector(".feedback");
var timeEl = document.querySelector(".timer");
var incorrectAnswerPenalty = 10;
var questionIndex = 0;
var numCorrect = 0;
var timeLeft = 75;

//stores questions at index 0, answers at 1-4
var questionArry = [["Commonly used data types DO NOT include:","strings","booleans","alerts","numbers"],
                    ["A very useful tool used during development and debugging for printing content to the debugger is","JavaScript","terminal/bash","for loops","console log"],
                    ["The condition in an if/else statement is enclosed within _____.","quotes","curly brackets","parentheses","square brackets"],
                    ["Arrays in JavaScript can be used to store _____.","numbers and strings","other arrays","booleans","all of the above"],
                    ["String values must be enclosed within _____ when being assigned to variables.","commas","curly brackets","quotes","parentheses"]];

//stores correct answers for question of corresponding index as references to correct answer's button object variable
var answerArry = [answer3, answer4, answer3, answer4, answer3];

function renderQuestion(){
  question.textContent = questionArry[questionIndex][0];
  answer1.textContent = "1. " + questionArry[questionIndex][1];
  answer2.textContent = "2. " + questionArry[questionIndex][2];
  answer3.textContent = "3. " + questionArry[questionIndex][3];
  answer4.textContent = "4. " + questionArry[questionIndex][4];
}

//handles checking answer
function checkAnswer(event){
  feedback.setAttribute("style", "border-top: solid rgb(83, 83, 83);");

  //checks if the target of the click equals the correct target stored in the answerArry
  if(event.target == answerArry[questionIndex]){
    numCorrect++;
    feedback.textContent = "Correct";
  }
  else{
    timeLeft -= incorrectAnswerPenalty;
    feedback.textContent = "Incorrect";
  }

  //determines if all questions have been answered
  questionIndex++;
  if(questionIndex<questionArry.length){
    renderQuestion();
  }
  else{
    localStorage.setItem("score", timeLeft);
    window.location.href = "../html/user-submission.html";
  }
}

//handles time countdown
function displayTime(){
  if(timeLeft == 0){
    localStorage.setItem("score", 0);
    window.location.href = "../html/user-submission.html";
  }
  timeEl.textContent = timeLeft + " seconds remain";
  timeLeft--;
}

// Add event listener to answer buttons
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);

setInterval(displayTime, 1000);

renderQuestion();




