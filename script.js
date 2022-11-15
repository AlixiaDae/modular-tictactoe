const Player = (marker) => {
    const playerMarker = () =>  marker;

    return {
        playerMarker
    }
}

const displayController = (() => {
    const playerOne = Player('X');
    const computerOne = Player('O');
    let playerTurn = true;

    function availableCell() {
        return gameCells.filter((cell) => cell.textContent === '');
    }

    const placePlayerToken = (cell) => {
        if(playerTurn) {
            cell.target.textContent = `${playerOne.playerMarker()}`;
            playerTurn = !playerTurn;
        } else if(!playerTurn) {
        alert(`Computer's turn`)
    }
}

    const gameCells = [...document.querySelectorAll('.cell')];

    gameCells.forEach(cell => {
        cell.addEventListener('click', placePlayerToken)
    })


})()
