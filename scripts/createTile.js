import { gameBoard } from './gameBoard.js';


const createTile = (tileIndex) => {
    /**Returns object representing gameBoard tile. "tileIndex" argument should
     * represent index of tile's corresponding element in gameBoard.tiles.*/

    const _updateTile = (tileDiv, newInnerHtml, newArrayElement, 
                    newCurrentUser) => {
        /**Updates innerHTML of tileDiv node passed, its tiles array element 
         * in gameBoard module, and gameBoard.currentUser.
         * 
         * Arguments:
         *  tileDiv (node)          : tileDiv node to be updated. 
         *  newInnerHtml (char)     : Char to be inputted into tileDiv node. 
         *                            Either 'X' or 'O'.
         *  newArrayElement (int)   : Int to be inputted into corresponding 
         *                            element in gameBoard.tiles. 
         *  newCurrentUser (string) : Either 'X' or 'O'. Represents user that
         *                            will be playing the next turn.*/
        tileDiv.innerHTML += newInnerHtml;
        gameBoard.tiles[tileDiv.id] = newArrayElement;
        gameBoard.currentUser = newCurrentUser;
    }

    const _markTile = (tileDiv) => {
        /**Calls upon _updateTile and passes arguments into such depending on 
         * value of gameBoard.currentUser.
         * 
         * Arguments:
         *  tileDiv : tileDiv node to be updated.*/
        if (tileDiv.innerHTML === '') {
            switch (gameBoard.currentUser) {
                case 'X':
                    _updateTile(tileDiv, 'X', -1, 'O');
                    break;
                case 'O':
                    _updateTile(tileDiv, 'O', 1, 'X');
                    break;
            }
        }
    }
    
    // Create node representing tile to be appended to gameBoard div.
    let tileDiv = document.createElement('div');
    tileDiv.id = tileIndex;
    tileDiv.classList.add('gameBoardTile');
    tileDiv.addEventListener('click', _markTile.bind(null, tileDiv));
    tileDiv.addEventListener('click', gameBoard.checkWinner);

    return {tileDiv};
}

export { createTile };