const Player = (marker) => {
    const playerMarker = () =>  marker;

    return {
        playerMarker
    }
}

const gameDisplay = (() => {
    const playerOne = Player('X');
    const computerOne = Player('O');
    let playerTurn = true;
    let gameOver = 9;

    function availableCell() {
        return gameCells.filter((cell) => cell.textContent === '');
    }

    const placePlayerToken = (cell) => {
        if (gameOver == 0) {
            alert('No more turns available!');
        } else if(cell.target.textContent == `${playerOne.playerMarker()}`) {
            console.log('Cell taken by player token!')
        } else if (cell.target.textContent ==  `${computerOne.playerMarker()}`) { 
            console.log('Cell taken by computer token!')
        } else if(playerTurn && gameOver > 0) {
            cell.target.textContent = `${playerOne.playerMarker()}`;
            playerTurn = !playerTurn;
            gameOver--;
        } else if(!playerTurn && gameOver > 0) {
            availableCell()[0].textContent = `${computerOne.playerMarker()}`;
            playerTurn = !playerTurn
            gameOver--;
    }
}
    const gameCells = [...document.querySelectorAll('.cell')];
    gameCells.forEach(cell => {
        cell.addEventListener('click', placePlayerToken)
    })

})()
