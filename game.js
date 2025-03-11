let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3); //Math.floor rounds down values + Math.random returns a value >= 0 or < max"
    if (choice === 0) { return "rock" }
    if (choice === 1) { return "paper" }
    else { return "scissors" }
}

let getHumanChoice = () => {
    let choice = prompt("What is your choice? ")
    if (choice.toLowerCase() === "rock" ) { return "rock" }
    if (choice.toLowerCase() === "paper") { return "paper" }
    if (choice.toLowerCase() === "scissors") {return "scissors" }
}

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    //human chooses rock
    if ((humanChoice === "rock") && (computerChoice === "rock")) {
        return "It's a tie!"
    }
    if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++;
        return "You lose! Paper beats Rock."
    }
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        return "You win! Rock beats Scissors."
    }

    //human chooses paper
    if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        return "You win! Paper beats Rock."
    }
    if ((humanChoice === "paper") && (computerChoice === "paper")) {
        return "It's a tie!"
    }
    if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++;
        return "You lose! Scissors beats Paper."
    }

    //human chooses scissors
    if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++;
        return "You lose! Rock beats Scissors."
    }
    if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        return "You win! Scissors beats Paper."
    }
    if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
        return "It's a tie!"
    }
}

// playRound testing
const a = getHumanChoice()
const b = getComputerChoice()
console.log(b)

console.log(playRound(a,b))

console.log("Human score: " + humanScore + " Computer Score: " + computerScore)

