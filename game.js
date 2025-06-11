let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3); //Math.floor rounds down values + Math.random returns a value >= 0 or < max"
    if (choice === 0) { return "rock" }
    if (choice === 1) { return "paper" }
    else { return "scissors" }
}

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playerScore = document.querySelector("#player-score");
    playerScore.textContent = "Your score: " + humanScore;
    
    const pcScore = document.querySelector("#pc-score");
    pcScore.textContent = "Computer score: " + computerScore;
   
    const results = document.querySelector(".results");

    let playRound = (humanChoice, computerChoice) => {
        //human chooses rock
        if ((humanChoice === "rock") && (computerChoice === "rock")) {
            results.textContent = "Both of you chose Rock.";
        }
        if ((humanChoice === "rock") && (computerChoice === "paper")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "Paper beats Rock."
        }
        if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "Rock beats Scissors."
        }
    
        //human chooses paper
        if ((humanChoice === "paper") && (computerChoice === "rock")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "Paper beats Rock."
        }
        if ((humanChoice === "paper") && (computerChoice === "paper")) {
            results.textContent = "Both of you chose Paper."
        }
        if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "Scissors beats Paper."
        }
    
        //human chooses scissors
        if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            computerScore++;
            pcScore.textContent = "Computer score: " + computerScore;
            results.textContent = "Rock beats Scissors."
        }
        if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            humanScore++;
            playerScore.textContent = "Your score: " + humanScore;
            results.textContent = "Scissors beats Paper."
        }
        if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
            results.textContent = "Both of you chose Scissors."
        }

        // check for final score
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) { results.textContent = "You win the game!"}
            if (humanScore === computerScore) { results.textContent = "The game ends in a tie."}
            if (humanScore < computerScore) { results.textContent = "You lose the game."}

            humanScore = 0;
            computerScore = 0;
            playerScore.textContent = "Your score: " + humanScore;
            pcScore.textContent = "Computer score: " + computerScore;
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
}

playGame()