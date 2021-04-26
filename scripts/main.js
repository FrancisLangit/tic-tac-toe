const gameBoard = (() => {
    let _tiles = Array(9).fill(0);
    let _containerDiv = document.querySelector('.gameBoard');

    const _markTile = (tileDiv) => {
        if (tileDiv.innerHTML === '') {
            tileDiv.innerHTML += 'x';
            _tiles[tileDiv.id] = 1;
        }
    }

    const _createTile = (tileIndex) => {
        let tileDiv = document.createElement('div');
        tileDiv.id = tileIndex;
        tileDiv.classList.add('gameBoardTile');
        tileDiv.addEventListener('click', _markTile.bind(null, tileDiv));
        return tileDiv;
    }

    const display = () => {
        for (i = 0; i < _tiles.length; i++) {
            _containerDiv.append(_createTile(i));
        }
    }

    return {display}
})();

gameBoard.display();