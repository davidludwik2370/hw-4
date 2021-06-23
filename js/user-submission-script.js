// Variables
var localStorage = window.localStorage;
var myScore = localStorage.getItem("score");
var submit = document.querySelector(".submit");
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector(".initials");
var textScoreList = localStorage.getItem("scoreList");
var scoreList = null;
if(textScoreList){
    scoreList = JSON.parse(textScoreList);
}

finalScore.textContent = "Your score is " + myScore;


// Add event listener to generate button
function submitScore(){
    if(!scoreList){
        scoreList = [[initials.value, myScore]];
    }
    else{
        var inserted = false;
        for(i=0; i<scoreList.length; i++){
            if(myScore > scoreList[i][1]){
                scoreList.splice(i, 0, [initials.value, myScore]);
                inserted = true;
                break;
            }
        }
        if(!inserted){
            scoreList.push([initials.value, myScore]);
        }
    }

    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    window.location.href = "../html/highscores.html";
}

submit.addEventListener("click", submitScore);







