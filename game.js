function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  num === 0
    ? (choice = "Rock")
    : num === 1
    ? (choice = "Paper")
    : (choice = "Scissors");
  return choice;
}

function capitalize(string) {
  let lower = string.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}

// function getUserChoice() {
//   let choicePrompt = prompt("Rock, Paper or Scissors?");
//   if (
//     choicePrompt == "" ||
//     choicePrompt == null ||
//     !["Rock", "Paper", "Scissors"].includes(capitalize(choicePrompt))
//   ) {
//     getUserChoice();
//   } else return capitalize(choicePrompt);
// }

// function getUserChoice() {
//   let choicePrompt = "";
//   while (
//     choicePrompt == "" ||
//     choicePrompt == null ||
//     !["Rock", "Paper", "Scissors"].includes(capitalize(choicePrompt))
//   ) {
//     choicePrompt = prompt("Rock, Paper or Scissors?");
//   }
//   return capitalize(choicePrompt);
// }

const buttons = document.querySelector(".buttons-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const winnerDisplay = document.createElement("p");

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return 1;
  } else if (playerSelection === computerSelection) {
    return 2;
  } else return 3;
}
let userScore = 0;
let computerScore = 0;

function game(userChoice) {
  if (userScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    // console.log(playRound(userChoice, computerChoice));
    let round = playRound(userChoice, computerChoice);
    if (round == 1) {
      userScore++;
      console.log("You won this round");
    } else if (round == 2) {
      computerScore++;
      console.log("You lost this round");
    } else console.log("You drew this round");
    console.log(`Your score is ${userScore}`);
    console.log(`Computer score is ${computerScore}`);
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    if (userScore == 5) {
      buttons.after(winnerDisplay, "You win!");
    } else if (computerScore == 5) {
      buttons.after(winnerDisplay, "You lose!");
    }
  }
}
//   console.log(userScore);
//   console.log(computerScore);
// userScore > computerScore
//   ? console.log("You won the game!")
//   : computerScore > userScore
//   ? console.log("You lost the game")
//   : computerScore == userScore
//   ? console.log("It's a draw!")
//   : "";

// game();

rock.addEventListener("click", (e) => {
  game(e.target.innerText);
});
paper.addEventListener("click", (e) => {
  game(e.target.innerText);
});
scissors.addEventListener("click", (e) => {
  game(e.target.innerText);
});
