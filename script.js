function getComputerChoice(min, max) {
    choices = ["Rock", "Paper", "Scissors"];
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    computerSelection = choices[randomNumber];
    return computerSelection;
    }

    function playTheGame(playerSelection, computerSelection) {

        let div = document.querySelector('.content');
        div.style.marginTop = '20px';


        if (playerSelection === computerSelection) {
            div.textContent ='It\'s a Tie. Round repeats!!!';
            return;
        }
        if (playerSelection === "Rock" && computerSelection === "Paper"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
            return 2;
        }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            div.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            return 1;
        }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
            return 2;
        }else if (playerSelection === "Paper" && computerSelection === "Rock"){
            div.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            return 1;
        }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            div.textContent =`You LOSE! ${playerSelection} loses from ${computerSelection}`;
            return 2;
        }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            div.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            return 1;
        }
    }
    document.body.style.textAlign = 'center';
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            const computer = getComputerChoice(0, 2);
            const player = button.className;
            const result = playTheGame(player, computer);
            if (result === 1) {
                playerScore += 1;
                score.textContent = `Player : ${playerScore} vs Computer : ${computerScore}`;
            }else if (result === 2) {
                computerScore += 1;
                score.textContent = `Player : ${playerScore} vs Computer : ${computerScore}`;
            }
        })
    })

    const score = document.querySelector('.score');
    score.style.backgroundColor = 'red';
    let playerScore = 0;
    let computerScore = 0;
    score.style.fontSize = '24px';
    score.style.marginBottom = '20px';
    score.textContent = `Player : ${playerScore} vs Computer : ${computerScore}`;