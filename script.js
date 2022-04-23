function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    turn = Math.floor(Math.random() * rps.length);
    return rps[turn];
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'Computer chooses rock...\nDraw! Play again!';
                break;

            case 'paper':
                return 'Computer chooses paper...\nPaper covers rock.\nYou lose!';
                break;

            case 'scissors':
                return 'Computer chooses scissors...\nRock smashes scissors.\nYou win!';
                break;

        }

    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'Computer chooses rock...\nPaper covers rock.\nYou win!';
                break;

            case 'paper':
                return 'Computer chooses paper...\nDraw! Play again!';
                break;

            case 'scissors':
                return 'Computer chooses scissors...\nScissors cut paper.\nYou lose!';
                break;

        }

    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'Computer chooses rock...\nRock smashes scissors.\nYou lose!';
                break;

            case 'paper':
                return 'Computer chooses paper...\nScissors cut paper.\nYou win!';
                break;

            case 'scissors':
                return 'Computer chooses scissors...\nDraw! Play again!';
                break;

        }
    }
}
















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