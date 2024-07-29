let humanScore=0;
let computerScore=0;
let humanChoice;
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

function playRound(){
  getComputerChoice();
  let comp = computerChoice;
  getHumanChoice();
  let human = humanChoice;
  if (human==comp){
    console.log("Tie")
    return;
  }
  if (human==0){
    if(comp==1){
      computerScore++;
      console.log("computer wins")
      return
    } else {
      humanScore++
      console.log("human wins")
      return
    }
  }
  if(human==1){
    if(comp==0){
      humanScore++;
      console.log("human wins");
    } else {
      computerScore++;
      console.log("computer wins");
    }
  }
  if(human==2){
    if(comp==0){
      computerScore++;
      console.log("computer wins");
    } else {
      humanScore++;
      console.log("human wins");
    }
  }
}

roundPlay.addEventListener("click", () => {
  // for(let i=0; i<5; i++){
    playRound();
  // }
  console.log("Computer: "+computerScore);
  console.log("Human: "+humanScore);
})

// getComputerChoice();
// console.log(computerChoice);
// getHumanChoice();
// console.log(humanChoice);

