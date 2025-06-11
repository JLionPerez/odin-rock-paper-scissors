let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3); //Math.floor rounds down values + Math.random returns a value >= 0 or < max"
    if (choice === 0) { return "rock" }
    if (choice === 1) { return "paper" }
    else { return "scissors" }
}

// let getHumanChoice = () => {
//     let choice = prompt("What is your choice? ")
//     if (choice.toLowerCase() === "rock" ) { return "rock" }
//     if (choice.toLowerCase() === "paper") { return "paper" }
//     if (choice.toLowerCase() === "scissors") {return "scissors" }
// }

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    const playerScore = document.querySelector("#player-score");
    const pcScore = document.querySelector("#pc-score");
    const results = document.querySelector(".results");

    let playRound = (humanChoice, computerChoice) => {
        //human chooses rock
        if ((humanChoice === "rock") && (computerChoice === "rock")) {
            results.textContent = "It's a tie!";
        }
        if ((humanChoice === "rock") && (computerChoice === "paper")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "You lose! Paper beats Rock."
        }
        if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "You win! Rock beats Scissors."
        }
    
        //human chooses paper
        if ((humanChoice === "paper") && (computerChoice === "rock")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "You win! Paper beats Rock."
        }
        if ((humanChoice === "paper") && (computerChoice === "paper")) {
            results.textContent = "It's a tie!"
        }
        if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "You lose! Scissors beats Paper."
        }
    
        //human chooses scissors
        if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "You lose! Rock beats Scissors."
        }
        if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "You win! Scissors beats Paper."
        }
        if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
            results.textContent = "It's a tie!"
        }
    }

    // button events
    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        console.log(playRound("rock", getComputerChoice()));
    });

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        console.log(playRound("paper", getComputerChoice()));
    });

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        console.log(playRound("scissors", getComputerChoice()));
    });

    if (humanScore > computerScore) { return "You win the game!"}
    if (humanScore === computerScore) { return "The game ends in a tie."}
    if (humanScore < computerScore) { return "You lose the game."}

}

console.log(playGame())