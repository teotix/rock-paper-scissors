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

function getUserChoice() {
  let choicePrompt = prompt("Rock, Paper or Scissors?");
  choicePrompt == "" || choicePrompt == null ? getUserChoice() : "";
  return capitalize(choicePrompt);
}

function playGame(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `Draw! You both chose ${playerSelection}`;
  } else if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
    return "You have chosen an invalid value!";
  } else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

let userChoice = getUserChoice();

let computerChoice = getComputerChoice();

console.log(playGame(userChoice, computerChoice));
