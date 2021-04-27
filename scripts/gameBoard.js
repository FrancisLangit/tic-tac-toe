import { createTile } from './createTile.js';

// Clear the game board in the UI
// Reset the tiles array (perhaps redeclare it with "Array(9).fill(0)"?)
// Display is different depending on status of game board:
    // If draw/winner present: display "Play again?" 
    // Else: display "Restart?"

const resetButton = (() =>{    

    const _resetGame = () => {
        let gameBoardTiles = document.querySelectorAll('.gameBoardTile');
        for (let i = 0; i < gameBoardTiles.length; i++) {
            gameBoardTiles[i].innerHTML = '';
        }
        gameBoard.tiles = Array(9).fill(0);
    }

    let resetButtonNode = document.querySelector('.resetButton')
    resetButtonNode.addEventListener('click', _resetGame);
})();

const gameBoard = (() => {
    /**Module representing gameboard on user interface where the bulk of the 
     * game is played.*/
    let currentUser = 'X';
    let tiles = Array(9).fill(0);

    let _containerDiv = document.querySelector('.gameBoard');

    const _isGameWon = (winValue) => {
        /**Returns true if a player has won. Otherwise, returns false.*/
        return (
            // Check rows.
            tiles[0] + tiles[1] + tiles[2] === winValue ||
            tiles[3] + tiles[4] + tiles[5] === winValue ||
            tiles[6] + tiles[7] + tiles[8] === winValue ||

            // Check columns.
            tiles[0] + tiles[3] + tiles[6] === winValue ||
            tiles[1] + tiles[4] + tiles[7] === winValue ||
            tiles[2] + tiles[5] + tiles[8] === winValue ||

            // Check diagonals.
            tiles[0] + tiles[4] + tiles[8] === winValue ||
            tiles[6] + tiles[4] + tiles[2] === winValue
        )
    }

    const _getWinner = () => {
        /**Checks if a player has won and returns a string representing them 
         * if such is the case.*/
        let winValues = [-3, 3];
        for (let i = 0; i < winValues.length; i++) {
            if (_isGameWon(winValues[i])) {
                switch (winValues[i]) {
                    case -3:
                        return 'X';
                    case 3:
                        return 'O';
                }
            }
        }
    }

    const checkWinner = () => {
        /**Updates the user interface if a player wins the game or if a draw 
         * condition has been met.*/
        let winner = _getWinner();
        if (winner) {
            document.querySelector('.winnerDisplay').innerHTML = (
                `${winner} has won the game.`);
        } else if (!tiles.includes(0)) {
            document.querySelector('.winnerDisplay').innerHTML = (
                "It's a draw!");
        }
    }

    const setUp = () => {
        /**Sets up the gameBoard module and displays such onto the webpage.*/
        for (let i = 0; i < tiles.length; i++) {
            _containerDiv.append(createTile(i).tileDiv);
        }
    }

    return {currentUser, tiles, checkWinner, setUp,}
})();

export { gameBoard };