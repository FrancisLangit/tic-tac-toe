const gameBoard = (() => {
    let _tiles = ['X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'X',];
    let _containerDiv = document.querySelector('.gameBoard');

    const _createTileDiv = (tilesArrayElement) => {
        /**Accepts an element from _tiles array and returns a div node
         * created out of such.*/
        let tileDiv = document.createElement('div');
        tileDiv.innerHTML += tilesArrayElement;
        tileDiv.classList.add('gameBoardTile');
        return tileDiv;
    }

    const display = () => {
        /**Creates a node element out of all elements in _tiles array 
         * and appends each to the gameBoard's div.*/
        for (i = 0; i < _tiles.length; i++) {
            _containerDiv.append(_createTileDiv(_tiles[i]));
        }
    }

    return {display}
})();

gameBoard.display();

// Create array to hold element representing tiles on gameboard
// Create container to hold grid of gameboard
// For each element in gameboard's tiles:
    // Create a node element out of the array element 
        // Style the created node element
    // Append the element to the gameboard's container