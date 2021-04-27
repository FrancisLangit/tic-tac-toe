import { gameBoard } from './gameBoard.js';

const main = (() => {
    /**Module holding body of the tic-tac-toe game.*/

    const run = () => {
        /**Sets up all modules and objects of the program.*/
        gameBoard.setUp();
    }

    return {run}
})();

main.run();