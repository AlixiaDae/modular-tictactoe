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
    const gameCells = [...document.querySelectorAll('.cell')];
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
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
      const checkRows = () => {  gameCells.forEach(() => {
           if(gameCells[0].textContent === 'O' && gameCells[1].textContent === 'O' && gameCells[2].textContent === 'O') {
            console.log('computer wins!');
            gameOver = 0
           } else if (gameCells[3].textContent === 'O' && gameCells[4].textContent === 'O' && gameCells[5].textContent === 'O') {
            console.log('computer wins!');
            gameOver = 0
           } else if (gameCells[6].textContent === 'O' && gameCells[7].textContent === 'O' && gameCells[8].textContent === 'O') {
            console.log('computer wins!');
            gameOver = 0
           } else if(gameCells[0].textContent === 'X' && gameCells[1].textContent === 'X' && gameCells[2].textContent === 'X') {
            console.log('Player wins!');
            gameOver = 0
           } else if (gameCells[3].textContent === 'X' && gameCells[4].textContent === 'X' && gameCells[5].textContent === 'X') {
            console.log('Player wins!');
            gameOver = 0
           } else if (gameCells[6].textContent === 'X' && gameCells[7].textContent === 'X' && gameCells[8].textContent === 'X') {
            console.log('Player wins!');
            gameOver = 0
    }}
)}

    
    gameCells.forEach(cell => {
        cell.addEventListener('click', placePlayerToken)
    })

    gameCells.forEach(cell => {
        cell.addEventListener('click', checkRows)
    })

    return {
        
    }

})()
