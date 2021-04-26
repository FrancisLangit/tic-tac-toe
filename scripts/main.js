let gameBoard = (function() {
    'use strict'

    let gameBoardArray = [
        'X', 'X', 'X',
        ' ', 'O', 'O',
        ' ', ' ', ' ',
    ];

    function display() {
        console.log(gameBoardArray);
    }

    return {
        display,
    }
})();

gameBoard.display();