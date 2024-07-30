let humanScore=0;
let computerScore=0;
let humanChoice=0;
let computerChoice;
const arr = ["rock","paper","scissors"];
const roundPlay = document.querySelector("#playround");

function getComputerChoice(){
  computerChoice=Math.floor(Math.random()*3)
  return arr[computerChoice];
}
function getHumanChoice(){
  let hand=prompt("Enter your hand: ");
  hand=hand.toLowerCase();
  hand.toString();
  if (hand=="rock"){
    humanChoice=0;
  }
  if (hand=="paper"){
    humanChoice=1;
  }
  if (hand=="scissors"){
    humanChoice=2;
  }
}

const computerpoints = document.querySelector('#computerScore');
const humanpoints = document.querySelector('#humanScore');

function playRound(){
  getComputerChoice();
  let comp = computerChoice;
  // getHumanChoice();
  let human = humanChoice;
  if (human==comp){
    console.log("Tie")
    return;
  }
  if (human==0){
    if(comp==1){
      computerScore++;
      computerpoints.textContent = computerScore;
      console.log("computer wins")
      return
    } else {
      humanScore++
      humanpoints.textContent = humanScore;
      console.log("human wins")
      return
    }
  }
  if(human==1){
    if(comp==0){
      humanScore++;
      humanpoints.textContent = humanScore;
      console.log("human wins");
    } else {
      computerScore++;
      computerpoints.textContent = computerScore;
      console.log("computer wins");
    }
  }
  if(human==2){
    if(comp==0){
      computerScore++;
      computerpoints.textContent = computerScore;
      console.log("computer wins");
    } else {
      humanScore++;
      humanpoints.textContent = humanScore;
      console.log("human wins");
    }
  }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('#result');
const userChoice = document.querySelector('#userChoice');

roundPlay.addEventListener("click", () => {
  // for(let i=0; i<5; i++){
    playRound();
  // }
  // console.log("Computer: "+computerScore);
  // console.log("Human: "+humanScore);
})

rockButton.addEventListener("click", () => {
  userChoice.textContent ='Rock';
  humanChoice = 0;

})
paperButton.addEventListener("click", () => {
  userChoice.textContent = 'Paper';
  humanChoice = 1;
})
scissorsButton.addEventListener("click", () => {
  userChoice.textContent = 'Scissors';
  humanChoice = 2;
})

// getComputerChoice();
// console.log(computerChoice);
// getHumanChoice();
// console.log(humanChoice);

