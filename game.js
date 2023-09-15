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

function getUserChoice() {
  let choicePrompt = "";
  while (
    choicePrompt == "" ||
    choicePrompt == null ||
    !["Rock", "Paper", "Scissors"].includes(capitalize(choicePrompt))
  ) {
    choicePrompt = prompt("Rock, Paper or Scissors?");
  }
  return capitalize(choicePrompt);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `Draw! You both chose ${playerSelection}`;
  } else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(userChoice, computerChoice));
    let round = playRound(userChoice, computerChoice);
    round.includes("Win")
      ? userScore++
      : round.includes("Lose")
      ? computerScore++
      : "";
  }
  //   console.log(userScore);
  //   console.log(computerScore);
  userScore > computerScore
    ? console.log("You won the game!")
    : computerScore > userScore
    ? console.log("You lost the game")
    : computerScore == userScore
    ? console.log("It's a draw!")
    : "";
}

game();
