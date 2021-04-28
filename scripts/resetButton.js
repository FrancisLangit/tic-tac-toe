import { gameBoard } from './gameBoard.js'; 

const resetButton = (() =>{    
    /**Represents reset button below game board that resets the game.*/
    let resetButtonNode = document.querySelector('.resetButton')

    const _resetGame = () => {
        /**Clears all tiles in gameBoard, resets winnerDisplay, resets 
         * gameBoard.currentUser, and resets gameBoard.tiles. Also resets 
         * inner HTML of resetButton itself.*/
        let gameBoardTiles = document.querySelectorAll('.gameBoardTile');
        for (let i = 0; i < gameBoardTiles.length; i++) {
            gameBoardTiles[i].innerHTML = '';
        }
        document.querySelector('.winnerDisplay').innerHTML = 'Game ongoing.';
        gameBoard.currentUser = 'X';
        gameBoard.tiles = Array(9).fill(0);
        resetButtonNode.innerHTML = 'Restart?';
    }

    // Add event listener to reset button's node in document.
    resetButtonNode.addEventListener('click', _resetGame);

    return {resetButtonNode}
})();

export { resetButton }