function computerPlay () {
    let choices = ["rock","paper","scissors"];
    let result = choices[Math.floor(Math.random() * choices.length )];
    return result;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return 1;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return 2;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return 2;
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        return 1;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return 2;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return 1;
    }
    else {
        return 3;
    }
}




function game () {
    let computerScore = 0;
    let playerScore = 0;
     

    for (let i = 1; i <= 5; i++){

        const computerSelection = computerPlay();
        let playerSelection = prompt("Player, what is your choice?");
        playRound(playerSelection, computerSelection);
        
        
        if (playRound(playerSelection, computerSelection) === 1) {
            console.log("Computer Wins! " + computerSelection + " beats " + playerSelection  )
            computerScore++;
        }
        if (playRound(playerSelection, computerSelection) === 2) {
            console.log("Player Wins! " + playerSelection + " beats " +  computerSelection )
            playerScore++;
        }
        if (playRound(playerSelection, computerSelection) === 3) {
            console.log("Tie" )
        }


    }
    if (computerScore > playerScore) {
        console.log("Computer is the big winner!")
    }
    if (playerScore > computerScore) {
        console.log("Player you are the big winner!")
    }
    if (playerScore === computerScore) {
        console.log("This is a tie game!")
    }
    
 }