let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) { return "rock" }
  else if (random === 1) { return "paper" }
  else { return "scissors" }
}

function getHumanChoice() {
  return prompt("Choose Rock, Paper or Scissors").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
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
    console.log("Tie!")
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  if (humanScore > computerScore) {
    console.log("You won the game! 🎉")
  } else if (computerScore > humanScore) {
    console.log("Computer won the game! 🤖")
  } else {
    console.log("It's a tie! 🤝")
  }
}

playGame()