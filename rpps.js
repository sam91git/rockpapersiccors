let humanscore = 0;
let computerscore = 0;
let roundsplayed = 0;

// DOM ELEMENTS
const container = document.querySelector("#container");

const RockBtn = document.querySelector("#Rock");
RockBtn.addEventListener('click', function() {
    playround("rock", getcomputerchoice());
});

const PaperBtn = document.querySelector("#Paper");
PaperBtn.addEventListener('click', function() {
    playround("paper", getcomputerchoice());
});

const ScissorsBtn = document.querySelector("#Scissors");
ScissorsBtn.addEventListener('click', function() {
    playround("scissors", getcomputerchoice());
});

const runningScore = document.createElement("p");
runningScore.textContent = "Current Score: Player 0 | Computer 0";
container.appendChild(runningScore);

const thisround = document.createElement("p");
thisround.id = "thisround";                      // ✅ add id for CSS targeting
thisround.textContent = "Make your move!"; 
container.appendChild(thisround);

const gameResults = document.createElement("p");
gameResults.textContent = "Final Game Results: Player 0 | Computer 0";
container.appendChild(gameResults);

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener('click',() => location.reload());




// FUNCTIONS

function getcomputerchoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playround(humanchoice, computerchoice) {
    if (roundsplayed >= 10) return;

    if (humanchoice === computerchoice) {
        thisround.textContent = "It's a tie!";
    } else if (
        (computerchoice === "rock" && humanchoice === "scissors") ||
        (computerchoice === "paper" && humanchoice === "rock") ||
        (computerchoice === "scissors" && humanchoice === "paper")
    ) {
        computerscore++;
        thisround.textContent = `You lose! ${computerchoice} beats ${humanchoice}.`;
    } else {
        humanscore++;
        thisround.textContent = `You win! ${humanchoice} beats ${computerchoice}.`;
    }

    roundsplayed++;
    runningScore.textContent = `Current Score: Player ${humanscore} | Computer ${computerscore}`;
    if (roundsplayed === 10) showgameResults();
}

function showgameResults() {
    if (humanscore > computerscore) {
        gameResults.textContent = `Congratulations! You won the game ${humanscore} to ${computerscore}!`;
    } else if (computerscore > humanscore) {
        gameResults.textContent = `Game Over. The computer won ${computerscore} to ${humanscore}.`;
    } else {
        gameResults.textContent = `It's a draw! The game ended ${humanscore}-${computerscore}.`;
    }
}

function resetGame() {
    roundsplayed = 0;
    humanscore = 0;
    computerscore = 0;
    runningScore.textContent = "Current Score: Player 0 | Computer 0";
    gameResults.textContent = "Final Game Results: Player 0 | Computer 0";
    
}