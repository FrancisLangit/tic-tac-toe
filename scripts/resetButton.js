import { main } from './main.js'; 

const resetButton = (() =>{    
    /**Represents reset button below game board that resets the game.*/
    let resetButtonNode = document.querySelector('.resetButton')

    const _resetGame = () => {
        /**Clears all tiles in main, resets statusDisplay, resets 
         * main.currentUser, and resets main.tiles. Also resets 
         * inner HTML of resetButton itself.*/
        let gameBoardTiles = document.querySelectorAll('.gameBoardTile');
        for (let i = 0; i < gameBoardTiles.length; i++) {
            gameBoardTiles[i].innerHTML = '';
        }
        document.querySelector('.statusDisplay').innerHTML = (
            "It's X's starting turn.");
        main.currentUser = 'X';
        main.tiles = Array(9).fill(0);
        main.toggleTiles();
        resetButtonNode.innerHTML = 'Restart?';
    }

    // Add event listener to reset button's node in document.
    resetButtonNode.addEventListener('click', _resetGame);

    return {resetButtonNode}
})();

export { resetButton }