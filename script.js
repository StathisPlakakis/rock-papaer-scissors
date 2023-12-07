function getComputerChoice(min, max) {
    choices = ["Rock", "Paper", "Scissors"];
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    computerSelection = choices[randomNumber];
    return computerSelection;
    }

    function playTheGame(playerSelection, computerSelection) {
        let div = document.querySelector('div');
        if (playerSelection === computerSelection) {
            div.textContent ='It\'s a Tie. Round repeats!!!';
        }
        if (playerSelection === "Rock" && computerSelection === "Paper"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
        }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            div.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            return 1;
        }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
        }else if (playerSelection === "Paper" && computerSelection === "Rock"){
            div.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            return 1;
        }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
        }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            div.textContent =`You WIN! ${playerSelection} beatsg ${computerSelection}`;
            return 1;
        }
    }


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const computer = getComputerChoice(0, 2);
        const player = button.className;
        playTheGame(player, computer);
    })
})



/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to the famous game of rock-paper-scissors!!!")
    console.log(`Score ------> Player: ${playerScore} - Computer: ${computerScore}`);
    console.log(`=================================================================`);
    console.log(`=================================================================`);
    console.log(`=================================================================`);
    console.log('\n');

    while (playerScore < 5 && computerScore < 5) {
        let player = getPlayerChoice();
        let computer = getComputerChoice(0, 2);
        if (playTheGame(player, computer)) {
            playerScore += 1;
        }else {
            computerScore += 1;
        }
        console.log(`Score ------> Player: ${playerScore} - Computer: ${computerScore}`);
        console.log(`=================================================================`);
        console.log('\n');
    }
    const winner = (playerScore === 5) ? 'player' : 'computer';
    (winner === 'player') ? 
    console.log('Bravo you won with score: ' + playerScore + ' - ' + computerScore) :
    console.log('You lost with score: ' + playerScore + ' - ' + computerScore)
}

game()
*/