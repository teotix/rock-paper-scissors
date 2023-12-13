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

const buttons = document.querySelector(".buttons-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset");
const userChoiceImage = document.querySelector("#user-choice");
const computerChoiceImage = document.querySelector("#computer-choice");
const resultsDiv = document.querySelector('.results-div')

const winnerDisplay = document.createElement("p");
winnerDisplay.style.cssText = "font-size: 65px; margin: 0; font-weight: bold";

function resetScore() {
  userScore = 0;
  computerScore = 0;
  userScoreDisplay.innerText = 0;
  computerScoreDisplay.innerText = 0;
  winnerDisplay.remove();
  computerChoiceImage.src = "";
  userChoiceImage.src = "";
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return 1;
  } else if (playerSelection == computerSelection) {
    return 2;
  } else return 3;
}
let userScore = 0;
let computerScore = 0;

resetButton.addEventListener("click", resetScore);

function game(userChoice) {
  if (userScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    userChoice == "Rock"
      ? (userChoiceImage.src = "./images/rock.png")
      : userChoice == "Paper"
      ? (userChoiceImage.src = "./images/paper.png")
      : (userChoiceImage.src = "./images/scissors.png");

    computerChoice == "Rock"
      ? (computerChoiceImage.src = "./images/rock.png")
      : computerChoice == "Paper"
      ? (computerChoiceImage.src = "./images/paper.png")
      : (computerChoiceImage.src = "./images/scissors.png");
    let round = playRound(userChoice, computerChoice);
    if (round === 1) {
      userScore++;
      console.log("You won this round");
    } else if (round === 3) {
      computerScore++;
      console.log("You lost this round");
    } else console.log("You drew this round");
    console.log(`Your score is ${userScore}`);
    console.log(`Computer score is ${computerScore}`);
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    if (userScore == 5) {
      winnerDisplay.innerText = "You Win!";
      // alert('You Win!')
      resultsDiv.after(winnerDisplay);
    } else if (computerScore == 5) {
      winnerDisplay.innerText = "You Lose!";
      // alert("You Lose!")
      resultsDiv.after(winnerDisplay);
    }
  }
}

rock.addEventListener("click", (e) => {
  game(e.target.innerText);
});
paper.addEventListener("click", (e) => {
  game(e.target.innerText);
});
scissors.addEventListener("click", (e) => {
  game(e.target.innerText);
});
