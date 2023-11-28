function getComputerChoice(min, max) {
    choices = ["Rock", "Paper", "Scissors"];
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return choices[randomNumber];
    }


function getPlayerChoice() {
    playerSelection = prompt("Choose: 'Rock' - 1, 'Paper' - 2, 'Scissors' - 3")
    while (playerSelection !== '1' && playerSelection !== '2' && playerSelection !== '3') {
        playerSelection = prompt("Choose only between: '1' - '2' - '3'");
    }
    if (playerSelection === '1') {
        playerSelection = 'Rock'
    }else if (playerSelection === '2') {
        playerSelection = 'Paper'
    }else{
        playerSelection = 'Scissors'
    }
    return playerSelection;
}

