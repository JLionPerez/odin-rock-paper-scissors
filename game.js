console.log("Hello World")

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3); //Math.floor rounds down values + Math.random returns a value >= 0 or < max"
    if (choice === 0) { return "rock" }
    if (choice === 1) { return "paper" }
    else { return "scissors" }
}

console.log(getComputerChoice())

let getHumanChoice = () => {
    let choice = prompt("What is your choice? ")
    if (choice.toLowerCase() === "rock" ) { return "rock" }
    if (choice.toLowerCase() === "paper") { return "paper" }
    if (choice.toLowerCase() === "scissors") {return "scissors" }
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

