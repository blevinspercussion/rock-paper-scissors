const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissers');

rockButton.addEventListener('click', playRound('rock', computerPlay()));
paperButton.addEventListener('click', playRound('paper', computerPlay()));
scissorsButton.addEventListener('click', playerSelection('scissors', computerPlay()));


function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    turn = Math.floor(Math.random() * rps.length);
    return rps[turn];
}

// function playerSelection(choice) {
// return prompt("Choose rock, paper, or scissors: ").toLowerCase();
// }

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock') {

        switch (computerSelection) {
            case 'rock':
                return 'You chose rock.\nComputer chooses rock...\nDraw! Play again!';
                break;

            case 'paper':
                return 'You chose rock.\nComputer chooses paper...\nPaper covers rock.\nYou lose!';
                break;

            case 'scissors':
                return 'You chose rock.\nComputer chooses scissors...\nRock smashes scissors.\nYou win!';
                break;

        }

    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'You chose paper.\nComputer chooses rock...\nPaper covers rock.\nYou win!';
                break;

            case 'paper':
                return 'You chose paper.\nComputer chooses paper...\nDraw! Play again!';
                break;

            case 'scissors':
                return 'You chose paper.\nComputer chooses scissors...\nScissors cut paper.\nYou lose!';
                break;

        }

    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'You chose scissors.\nComputer chooses rock...\nRock smashes scissors.\nYou lose!';
                break;

            case 'paper':
                return 'You chose scissors.\nComputer chooses paper...\nScissors cut paper.\nYou win!';
                break;

            case 'scissors':
                return 'You chose scissors.\nComputer chooses scissors...\nDraw! Play again!';
                break;

        }
    }
}

function game() {
    let playerScore = 0, computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     let round = playRound(playerSelection(), computerPlay());
    //     console.log(round);
    //     if (round.includes('win')) {
    //         playerScore += 1;
    //     } else if (round.includes('lose')) {
    //         computerScore += 1;
    //     } else {
    //         continue;
    //     }
    // }

    if (playerScore > computerScore) {
        console.log(`Congratulations! You win! Final score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost! Better luck next time! Final score: ${playerScore} to ${computerScore}`);
    } else {
        console.log(`It's a draw! Try again until somebody wins! Final score: ${playerScore} to ${computerScore}`);
    }

}


game();










// function playRound(playerSelection, computerSelection) {
//     let playerTurn = prompt("Choose rock, paper, or scissors: ").toLowerCase();
//     let computerTurn = computerPlay();
//     if (playerTurn === 'rock') {
//         switch (computerTurn) {
//             case 'rock':
//                 console.log("Computer chooses rock...")
//                 console.log('Draw! Play again!');
//                 playRound();

//             case 'paper':
//                 console.log("Computer chooses paper...")
//                 console.log('Paper covers rock. You lose!');
//                 break;

//             case 'scissors':
//                 console.log("Computer chooses scissors...")
//                 console.log('Rock breaks scissors. You win!');
//                 break;
//         }
//     } else if (playerTurn === 'paper') {
//         switch (computerTurn) {
//             case 'rock':
//                 console.log("Computer chooses rock...")
//                 console.log('Paper covers rock. You win!');
//                 break;

//             case 'paper':
//                 console.log("Computer chooses paper...")
//                 console.log('Draw! Play again!');
//                 playRound();

//             case 'scissors':
//                 console.log("Computer chooses scissors...")
//                 console.log('Scissors cut paper. You lose!');
//                 break;
//         }
//     } else if (playerTurn === 'scissors') {
//         switch (computerTurn) {
//             case 'rock':
//                 console.log("Computer chooses rock...")
//                 console.log("Rock breaks scissors. You lose!");
//                 break;

//             case 'paper':
//                 console.log("Computer chooses paper...")
//                 console.log("Scissors cut paper. You win!");
//                 break;

//             case 'scissors':
//                 console.log("Computer chooses scissors...")
//                 console.log("Draw! Play again!");
//                 playRound();
//         }
//     }
// }

playRound();