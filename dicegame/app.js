//In app variables
var player1Score = 0;
var player2Score = 0;
let player1Turn = true;


//Html variables
var player1ScoreBoard = document.getElementById("player1scoreboard");
var player2ScoreBoard = document.getElementById("player2scoreboard");
var player1Dice = document.getElementById("player1dice");
var player2Dice = document.getElementById("player2dice");
var rollButton = document.getElementById("rolldice");
var message = document.getElementById("gamestatus");
var resetButton = document.getElementById("resetbutton");

//Show Reset Button
function showResetButton(){
  rollButton.style.display = "none";
  resetButton.style.display = "block";
};

//Adding EventListener To Roll Dice Button
rollButton.addEventListener("click", function roll(){
 var randomNumber = Math.floor(Math.random() * 6) + 1;

 //Checking The Turn Of The Player And Performing Task According To It
 if(player1Turn){
     player1Score += randomNumber;
     player1ScoreBoard.textContent = player1Score;
     player1Dice.textContent = randomNumber;
     player1Dice.classList.remove("active");
     player2Dice.classList.add("active");
     message.textContent = "Player 2 Turn!";
     player1Turn = false;
 }else{
     player2Score += randomNumber;
     player2ScoreBoard.textContent = player2Score;
     player2Dice.textContent = randomNumber;
     player2Dice.classList.remove("active");
     player1Dice.classList.add("active");
     message.textContent = "Player 1 Turn!";
     player1Turn = true;
 }

 //Checking The Winner
 if(player1Score >= 30){
     message.textContent = "Player 1 Won 🥳";
     showResetButton();
 }
 else if(player2Score >= 30){
     message.textContent = "Player 2 Won 🎉";
     showResetButton();
 }

});

//resetButton
resetButton.addEventListener("click", function reset(){
  player1Score = 0;
  player2Score = 0;
  player2ScoreBoard.textContent = "0";
  player1ScoreBoard.textContent = "0";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn!";
  resetButton.style.display = "none";
  rollButton.style.display = "block";
});