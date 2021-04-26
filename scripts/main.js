const gameBoard = (() => {
    let _tiles = ['O', ' ', ' ', 'X', 'O', 'O', 'O', 'O', 'O',];
    let _containerDiv = document.querySelector('.gameBoardContainer');

    const _createTileDiv = (tilesArrayElement) => {
        /**Accepts an element from _tiles array and returns a div node
         * created out of such.*/
        let tileDiv = document.createElement('div');
        tileDiv.innerHTML += tilesArrayElement;
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
    // Append the element to the gameboard's container