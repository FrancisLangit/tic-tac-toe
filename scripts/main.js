const gameBoard = (() => {
    let _tiles = Array(9).fill(0);
    let _containerDiv = document.querySelector('.gameBoard');
    let _currentUser = 'X';

    const _markTile = (tileDiv) => {
        /**Changes the inner HTML of the passed tileDiv node and updates its 
         * corresponding element in _tiles array.*/
        if (tileDiv.innerHTML === '') {
            switch (_currentUser) {
                case 'X':
                    tileDiv.innerHTML += 'X';
                    _tiles[tileDiv.id] = -1;
                    _currentUser = 'O'
                    break;
                case 'O':
                    tileDiv.innerHTML += 'O';
                    _tiles[tileDiv.id] = 1;
                    _currentUser = 'X';
                    break;
            }
        }
    }

    const _createTile = (tileIndex) => {
        /**Creates and returns a node representing a tile on the game board. 
         * Such has ID equal to tileIndex argument passed.*/
        let tileDiv = document.createElement('div');
        tileDiv.id = tileIndex;
        tileDiv.classList.add('gameBoardTile');
        tileDiv.addEventListener('click', _markTile.bind(null, tileDiv));
        return tileDiv;
    }

    const setUp = () => {
        /**Sets up the gameBoard module and displays such onto the webpage.*/
        for (i = 0; i < _tiles.length; i++) {
            _containerDiv.append(_createTile(i));
        }
    }

    return {setUp}
})();

gameBoard.setUp();