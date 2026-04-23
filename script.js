let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) {
    return "Rock"
  } else if (random === 1) {
    return "Paper"
  } else {
    return "Scissors"
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper or Scissors")
  return choice
}


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  computerChoice = computerChoice.toLowerCase()

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("You win! Rock beats Scissors")
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    console.log("You lost! Paper beats Rock")
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    console.log("You win! Paper beats Rock")
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++
    console.log("You lost! Scissors beats Paper")
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    console.log("You win! Scissors beats Paper")
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++
    console.log("You lost! Rock beats Scissors")
  } else {
    console.log("Égalité!")
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)