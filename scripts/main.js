let gameBoard = (function() {
    let tiles = [
        'X', ' ', ' ',
        'X', 'O', 'O',
        'O', 'O', 'O',
    ];
    let container = document.querySelector('.gameBoardContainer');

    function createTileDiv(tilesArrayElement) {
        let tileDiv = document.createElement('div');
        tileDiv.innerHTML += tilesArrayElement;
        return tileDiv;
    }

    function display() {
        for (i = 0; i < tiles.length; i++) {
            container.append(createTileDiv(tiles[i]));
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