const gameBoard = (() => {
    let _tiles = Array(9).fill(0);
    let _containerDiv = document.querySelector('.gameBoard');
    let _currentUser = 'X';

    const _updateTile = (tileDiv, newInnerHtml, newArrayElement, 
                        newCurrentUser) => {
        /**Updates the innerHTML, corresponding _tiles element, and 
         * _currentUser of module dependent on tileDiv argument passed.*/
        tileDiv.innerHTML += newInnerHtml;
        _tiles[tileDiv.id] = newArrayElement;
        _currentUser = newCurrentUser;
    }

    const _markTile = (tileDiv) => {
        /**Changes the inner HTML of the passed tileDiv node and updates its 
         * corresponding element in _tiles array.*/
        if (tileDiv.innerHTML === '') {
            switch (_currentUser) {
                case 'X':
                    _updateTile(tileDiv, 'X', -1, 'O');
                    break;
                case 'O':
                    _updateTile(tileDiv, 'O', 1, 'X');
                    break;
            }
        }
    }

    const _getWinner = () => {
        /**Checks if a player has won and returns a string representing them 
         * if such is the case.*/
        let winValues = [-3, 3];
        for (i = 0; i < winValues.length; i++) {
            if (_tiles[0] + _tiles[1] + _tiles[2] === winValues[i] ||
                _tiles[3] + _tiles[4] + _tiles[5] === winValues[i] ||
                _tiles[6] + _tiles[7] + _tiles[8] === winValues[i] ||
    
                _tiles[0] + _tiles[3] + _tiles[6] === winValues[i] ||
                _tiles[1] + _tiles[4] + _tiles[7] === winValues[i] ||
                _tiles[2] + _tiles[5] + _tiles[8] === winValues[i] ||
    
                _tiles[0] + _tiles[4] + _tiles[8] === winValues[i] ||
                _tiles[6] + _tiles[4] + _tiles[2] === winValues[i]) {
                    switch (winValues[i]) {
                        case -3:
                            return 'X';
                        case 3:
                            return 'O';
                    }
            }
        }
    }

    const _checkWinner = () => {
        /**Updates the user interface if and when a player wins the game.*/
        let winner = _getWinner();
        if (winner) {
            let winnerDisplay = document.querySelector('.winnerDisplay');
            winnerDisplay.innerHTML = `${winner} has won the game.`;
        }
    }

    const _createTile = (tileIndex) => {
        /**Creates and returns a node representing a tile on the game board. 
         * Such has ID equal to tileIndex argument passed.*/
        let tileDiv = document.createElement('div');
        tileDiv.id = tileIndex;
        tileDiv.classList.add('gameBoardTile');
        tileDiv.addEventListener('click', _markTile.bind(null, tileDiv));
        tileDiv.addEventListener('click', _checkWinner);
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