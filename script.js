function computerPlay() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    turn = Math.floor(Math.random() * rps.length);
    return rps[turn];
}

console.log(computerPlay());

