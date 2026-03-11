 function gethumanchoice()
{
 let input = prompt("Choose: rock, paper, or scissors");
 if (input === null) return "invalid";
 return input.toLowerCase();
}

////******************************************* **//

function getcomputerchoice()    
{    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
///******************************************* **//

function playgame() {
let humanscore = 0;
let computerscore = 0;

///******************************************* **//

function playround(humanchoice, computerchoice) {
 if (humanchoice=== computerchoice)          
{
    console.log("tie");
}
else if ((computerchoice === "rock" && humanchoice === "scissors") || 
(computerchoice === "paper" && humanchoice === "rock") || 
(computerchoice === "scissors" && humanchoice === "paper"))
{
 computerscore++;
 console.log(`You lose! ${computerchoice} beats ${humanchoice}.`);
}
else
{
 humanscore++;
 console.log(`You win! ${humanchoice} beats ${computerchoice}.`);
 }
}
///******************************************* **//
for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} ---`);
     
    const humanselection= gethumanchoice();
    const computerselection = getcomputerchoice();

     playround(humanselection, computerselection);
  
  console.log(`Current Score: Player ${humanscore} | Computer ${computerscore}`);
}


console.log("\n=== FINAL GAME RESULTS ===");
    if (humanscore > computerscore) {
        console.log(`Congratulations! You won the game ${humanscore} to ${computerscore}!`);
    } else if (computerscore > humanscore) {
        console.log(`Game Over. The computer won ${computerscore} to ${humanscore}.`);
    } else {
        console.log(`It's a draw! The game ended in a ${humanscore}-${computerscore} tie.`);
    }
resetGame();
}

 function resetGame() {
    // Ask the user and check if they type "yes”//
    let answer = prompt("Do you want to play again? (yes/no)");
    
    // Using an if statement here is a bit safer in case they hit cancel (which returns null)
    if (answer && answer.toLowerCase() === "yes") {
        console.log("\n\n--- STARTING NEW GAME ---");
        playgame(); // Call the correct function name to start over!
    } else {
        console.log("Goodbye, thanks for playing!");
    }
}

playgame();