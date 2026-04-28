let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) { return "rock" }
  else if (random === 1) { return "paper" }
  else { return "scissors" }
}

function playRound(humanChoice, computerChoice) {
  const results = document.querySelector("#results")
  const score = document.querySelector("#score")

  if (humanChoice === computerChoice) {
    results.textContent = "Tie!"
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++
    results.textContent = "You win! "
  } else {
    computerScore++
    results.textContent = "You lost! "
  }

  score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

  if (humanScore === 5) {
    results.textContent = "You won the game! "
    disableButtons()
  } else if (computerScore === 5) {
    results.textContent = "Computer won the game! "
    disableButtons()
  }
}

function disableButtons() {
  document.querySelector("#rock").disabled = true
  document.querySelector("#paper").disabled = true
  document.querySelector("#scissors").disabled = true
}

document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice())
})

document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice())
})

document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
})