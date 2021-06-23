//Variables
var scoreList = JSON.parse(localStorage.getItem("scoreList"));
var highscores = document.querySelector(".highscores");
var clearBtn = document.querySelector(".clear");

//displays list of highscores
if(scoreList){
    for(i=0; i<scoreList.length; i++){
        var scoreEntry = document.createElement("div");
        scoreEntry.textContent = (i+1) + ". " + scoreList[i][0] + " - " + scoreList[i][1];
    
        highscores.appendChild(scoreEntry);
    }
}


//clear button functionality
clearBtn.addEventListener("click", function(){
    localStorage.clear();
    window.location.href = "../html/highscores.html";

})
