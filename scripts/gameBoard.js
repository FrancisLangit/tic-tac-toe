import { createTile } from './createTile.js';
import { resetButton } from './resetButton.js';


const gameBoard = (() => {
    /**Module representing gameboard on user interface where the bulk of the 
     * game is played.*/
    let currentUser = 'X';
    let tiles = Array(9).fill(0);

    let _containerDiv = document.querySelector('.gameBoard');
    let _statusDisplay = document.querySelector('.statusDisplay');

    const _isGameWon = (winValue) => {
        /**Returns true if a player has won. Otherwise, returns false. 
         * 
         * Arguments:
         *  winValue (int): Either -3 or 3. Value to be checked against when 
         *                  determining if a player has won.*/
        let t = gameBoard.tiles;
        return (
            // Check rows.
            t[0] + t[1] + t[2] === winValue ||
            t[3] + t[4] + t[5] === winValue ||
            t[6] + t[7] + t[8] === winValue ||

            // Check columns.
            t[0] + t[3] + t[6] === winValue ||
            t[1] + t[4] + t[7] === winValue ||
            t[2] + t[5] + t[8] === winValue ||

            // Check diagonals.
            t[0] + t[4] + t[8] === winValue ||
            t[6] + t[4] + t[2] === winValue
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

    const toggleTiles = (isDisable) => {
        /**Toggles pointer-events CSS of all tiles in gameBoard dependent on 
         * isDisable argument passed.
         * 
         * Arguments:
         *  isDisable (boolean) : True if tiles must be disabled. False if 
         *                        otherwise. */
        let tileDivs = document.querySelectorAll('.gameBoardTile');
        for (let i = 0; i < tiles.length; i++) {
            if (isDisable) {
                tileDivs[i].style.pointerEvents = 'none';
            } else {
                tileDivs[i].style.pointerEvents = 'auto';
            }
        }
    }

    const _updateInterface = (isDraw, winner) => {
        /**Updates the winner display div, reset button, and tiles depending 
         * on arguments passed.
         * 
         * Arguments:
         *  isDraw (boolean) : Pass true if game is ends in a draw. Pass 
         *                     false if otherwise.
         *  winner (string)  : Either 'X' or 'O'. Represents game winner.*/
        let statusDisplay = document.querySelector('.statusDisplay');
        if (isDraw) {
            statusDisplay.innerHTML = "It's a draw!";
        } else {
            statusDisplay.innerHTML = `${winner} has won the game.`;
        }
        resetButton.resetButtonNode.innerHTML = 'Play again?'
        toggleTiles(true);
    }

    const checkStatus = () => {
        /**Updates the user interface depending on the status of the game:
         *  - If winner found, display winner.
         *  - If draw condition met, announce draw.
         *  - Else, display who's turn it is currently.*/
        let winner = _getWinner();
        if (winner) {
            _updateInterface(false, winner);
        } else if (!gameBoard.tiles.includes(0)) {
            _updateInterface(true);
        } else if (!winner && gameBoard.tiles.includes(0)){
            _statusDisplay.innerHTML = `It's ${gameBoard.currentUser}'s turn.`;
        }
    }

    const setUp = () => {
        /**Sets up the gameBoard module and displays such onto the webpage.*/
        for (let i = 0; i < tiles.length; i++) {
            _containerDiv.append(createTile(i).tileDiv);
        }
    }

    return {currentUser, tiles, checkStatus, toggleTiles, setUp,}
})();

export { gameBoard };