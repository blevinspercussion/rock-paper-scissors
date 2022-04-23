function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    turn = Math.floor(Math.random() * rps.length);
    return rps[turn];
}

function playRound() {
    let playerTurn = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    let computerTurn = computerPlay();
    if (playerTurn === 'rock') {
        switch (computerTurn) {
            case 'rock':
                console.log("Computer chooses rock...")
                console.log('Draw! Play again!');
                playRound();

            case 'paper':
                console.log("Computer chooses paper...")
                console.log('Paper covers rock. You lose!');
                break;

            case 'scissors':
                console.log("Computer chooses scissors...")
                console.log('Rock breaks scissors. You win!');
                break;
        }
    } else if (playerTurn === 'paper') {
        switch (computerTurn) {
            case 'rock':
                console.log("Computer chooses rock...")
                console.log('Paper covers rock. You win!');
                break;

            case 'paper':
                console.log("Computer chooses paper...")
                console.log('Draw! Play again!');
                playRound();

            case 'scissors':
                console.log("Computer chooses scissors...")
                console.log('Scissors cut paper. You lose!');
                break;
        }
    } else if (playerTurn === 'scissors') {
        switch (computerTurn) {
            case 'rock':
                console.log("Computer chooses rock...")
                console.log("Rock breaks scissors. You lose!");
                break;

            case 'paper':
                console.log("Computer chooses paper...")
                console.log("Scissors cut paper. You win!");
                break;

            case 'scissors':
                console.log("Computer chooses scissors...")
                console.log("Draw! Play again!");
                playRound();
        }
    }
}

playRound();