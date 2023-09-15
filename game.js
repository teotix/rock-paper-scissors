function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  num === 0
    ? (choice = "Rock")
    : num === 1
    ? (choice = "Paper")
    : (choice = "Scissors");
  return choice;
}

function getUserChoice() {
  let choicePrompt = prompt("Rock, Paper or Scissors?");
  choicePrompt == "" || choicePrompt == null ? getUserChoice() : "";
  return choicePrompt;
}

// function playGame(playerSelection, computerSelection) {
//   if (
//     (playerSelection == "Rock" && computerSelection == "Scissors") ||
//     (playerSelection == "Paper" && computerSelection == "Rock") ||
//     (playerSelection == "Scissors" && computerSelection == "Paper")
//   ) {
//     return `Congratulations`
//   }
// }

let userChoice = getUserChoice();

let computerChoice = getComputerChoice();

console.log(userChoice);
console.log(computerChoice);
