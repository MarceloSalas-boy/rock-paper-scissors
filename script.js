function getComputerChoice () {
    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return "Rock"
    } else if (random === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoice())

function getHumanChoice () {
    let choice = prompt("Choice Rock, Paper or Scissors")
    return choice 
}

console.log(getHumanChoice())