let gameBoard = (function() {
    let tiles = [
        'X', ' ', ' ',
        'X', 'O', 'O',
        'O', 'X', 'O',
    ];
    let container = document.querySelector('.gameBoardContainer');
})();

gameBoard.display();


// Create array to hold element representing tiles on gameboard
// Create container to hold grid of gameboard
// For each element in gameboard's tiles:
    // Style the element
    // Append the element to the gameboard's container