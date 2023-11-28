function getComputerChoice(min, max) {
    choices = ["Rock", "Paper", "Scissors"];
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    computerSelection = choices[randomNumber];
    return computerSelection;
    }


function getPlayerChoice() {
    playerSelection = prompt("Choose: 'Rock' - 1, 'Paper' - 2, 'Scissors' - 3")
    while (playerSelection !== '1' && playerSelection !== '2' && playerSelection !== '3') {
        playerSelection = prompt("Choose only between: '1' - '2' - '3'");
    }
    if (playerSelection === '1') {
        playerSelection = 'Rock';
    }else if (playerSelection === '2') {
        playerSelection = 'Paper';
    }else{
        playerSelection = 'Scissors';
    }
    return playerSelection;
}

function playTheGame(playerSelection, computerSelection) {
    while (playerSelection === computerSelection) {
        console.log('It\'s a Tie. Round repeats!!!');
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice(0, 2);
    }
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log(`You LOSE! ${playerSelection} loses from ${computerSelection}`)
    }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log(`You WIN! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log(`You LOSE! ${playerSelection} loses from ${computerSelection}`)
    }else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log(`You WIN! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log(`You LOSE! ${playerSelection} loses from ${computerSelection}`)
    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log(`You WIN! ${playerSelection} beatsg ${computerSelection}`)
    }
}

