document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.tile-container');
    const scoreDisplay = document.querySelector('.score-container');
    const bestDisplay = document.querySelector('.best-container');
    const resultDisplay = document.querySelector('.game-message');
    const resultText = resultDisplay.querySelector('p');
    const restartBtn = document.querySelector('.restart-btn');
    const retryBtn = document.querySelector('.retry-btn');

    let squares = [];
    let score = 0;
    let bestScore = localStorage.getItem('2048-best') || 0;
    bestDisplay.innerHTML = bestScore;

    let grid = Array(16).fill(0);

    // Create Board
    function createBoard() {
        grid = Array(16).fill(0);
        score = 0;
        scoreDisplay.innerHTML = 0;
        resultDisplay.style.display = 'none';
        resultDisplay.classList.remove('game-won', 'game-over');

        generate();
        generate();
        updateView();
    }

    function generate() {
        let emptyCells = [];
        for (let i = 0; i < 16; i++) {
            if (grid[i] === 0) emptyCells.push(i);
        }
        if (emptyCells.length === 0) return;

        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell] = Math.random() < 0.9 ? 2 : 4;
    }

    function updateView() {
        gridDisplay.innerHTML = '';
        for (let i = 0; i < 16; i++) {
            if (grid[i] === 0) continue;

            let tile = document.createElement('div');
            tile.classList.add('tile');
            // Calculate Position
            const row = Math.floor(i / 4) + 1;
            const col = (i % 4) + 1;
            tile.classList.add(`tile-position-${row}-${col}`);

            let tileInner = document.createElement('div');
            tileInner.classList.add('tile-inner');
            tileInner.innerHTML = grid[i];

            tile.classList.add(`tile-${grid[i]}`);

            if (grid[i] > 2048) tile.classList.add('tile-super');

            tile.appendChild(tileInner);
            gridDisplay.appendChild(tile);
        }
        scoreDisplay.innerHTML = score;
        if (score > bestScore) {
            bestScore = score;
            bestDisplay.innerHTML = bestScore;
            localStorage.setItem('2048-best', bestScore);
        }
    }

    // Swipe Logic
    function moveRight() {
        let moved = false;
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let row = [grid[i], grid[i + 1], grid[i + 2], grid[i + 3]];
                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = zeros.concat(filteredRow);

                for (let j = 0; j < 4; j++) {
                    if (grid[i + j] !== newRow[j]) moved = true;
                    grid[i + j] = newRow[j];
                }
            }
        }
        return moved;
    }

    function moveLeft() {
        let moved = false;
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let row = [grid[i], grid[i + 1], grid[i + 2], grid[i + 3]];
                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = filteredRow.concat(zeros);

                for (let j = 0; j < 4; j++) {
                    if (grid[i + j] !== newRow[j]) moved = true;
                    grid[i + j] = newRow[j];
                }
            }
        }
        return moved;
    }

    function moveDown() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
            let col = [grid[i], grid[i + 4], grid[i + 8], grid[i + 12]];
            let filteredCol = col.filter(num => num);
            let missing = 4 - filteredCol.length;
            let zeros = Array(missing).fill(0);
            let newCol = zeros.concat(filteredCol);

            for (let j = 0; j < 4; j++) {
                if (grid[i + j * 4] !== newCol[j]) moved = true;
                grid[i + j * 4] = newCol[j];
            }
        }
        return moved;
    }

    function moveUp() {
        let moved = false;
        for (let i = 0; i < 4; i++) {
            let col = [grid[i], grid[i + 4], grid[i + 8], grid[i + 12]];
            let filteredCol = col.filter(num => num);
            let missing = 4 - filteredCol.length;
            let zeros = Array(missing).fill(0);
            let newCol = filteredCol.concat(zeros);

            for (let j = 0; j < 4; j++) {
                if (grid[i + j * 4] !== newCol[j]) moved = true;
                grid[i + j * 4] = newCol[j];
            }
        }
        return moved;
    }

    function combineRow(direction) {
        let combined = false;
        // Direction: 'left' or 'right'. 
        // For right: process from right to left? No, simplify. 
        // We already pushed numbers. Now just merge neighbors.
        // Actually standard 2048 processes merge AND slide in one go often, but this separate approach works too if processed carefully.
        // We need to merge standard: 2 2 0 0 -> 4 0 0 0 (Left).
        // Current moveLeft just slides.

        // Correct approach: Slide -> Combine -> Slide
        for (let i = 0; i < 15; i++) {
            if (i % 4 === 3) continue; // Skip last col for row check
            if (grid[i] === grid[i + 1] && grid[i] !== 0) {
                grid[i] *= 2;
                grid[i + 1] = 0;
                score += grid[i];
                combined = true;
            }
        }
        checkForWin();
        return combined;
    }

    function combineColumn() {
        let combined = false;
        for (let i = 0; i < 12; i++) {
            if (grid[i] === grid[i + 4] && grid[i] !== 0) {
                grid[i] *= 2;
                grid[i + 4] = 0;
                score += grid[i];
                combined = true;
            }
        }
        checkForWin();
        return combined;
    }

    function control(e) {
        let moved = false;
        if (e.keyCode === 39) {
            if (moveRight()) moved = true;
            if (combineRow()) { moved = true; moveRight(); }
        } else if (e.keyCode === 37) {
            if (moveLeft()) moved = true;
            if (combineRow()) { moved = true; moveLeft(); }
        } else if (e.keyCode === 38) {
            if (moveUp()) moved = true;
            if (combineColumn()) { moved = true; moveUp(); }
        } else if (e.keyCode === 40) {
            if (moveDown()) moved = true;
            if (combineColumn()) { moved = true; moveDown(); }
        }

        if (moved) {
            generate();
            updateView();
            checkForGameOver();
        }
    }

    // Fix combine logic: the generic combineRow above is flawed for specific directions (e.g. Right: 0 0 2 2 -> 0 0 4 0? No, should be 0 0 0 4).
    // Rewriting move/combine properly.

    // Helper to operate on array
    function operate(row) {
        // Slide left: 2 0 2 0 -> 2 2
        row = row.filter(x => x);
        let scoreAdd = 0;
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
                row[i] *= 2;
                scoreAdd += row[i];
                row[i + 1] = 0;
            }
        }
        row = row.filter(x => x); // filter out 0s from merge
        while (row.length < 4) row.push(0);
        return { row, scoreAdd };
    }

    // Re-bind keys to use robust logic
    document.addEventListener('keyup', (e) => {
        let moved = false;
        let oldGrid = [...grid];

        if (e.key === "ArrowRight") {
            for (let i = 0; i < 16; i += 4) {
                let row = [grid[i], grid[i + 1], grid[i + 2], grid[i + 3]];
                // Reverse for right processing
                let res = operate(row.reverse());
                score += res.scoreAdd;
                let newRow = res.row.reverse();
                for (let j = 0; j < 4; j++) grid[i + j] = newRow[j];
            }
        } else if (e.key === "ArrowLeft") {
            for (let i = 0; i < 16; i += 4) {
                let row = [grid[i], grid[i + 1], grid[i + 2], grid[i + 3]];
                let res = operate(row);
                score += res.scoreAdd;
                let newRow = res.row;
                for (let j = 0; j < 4; j++) grid[i + j] = newRow[j];
            }
        } else if (e.key === "ArrowUp") {
            for (let i = 0; i < 4; i++) {
                let col = [grid[i], grid[i + 4], grid[i + 8], grid[i + 12]];
                let res = operate(col);
                score += res.scoreAdd;
                let newCol = res.row;
                for (let j = 0; j < 4; j++) grid[i + j * 4] = newCol[j];
            }
        } else if (e.key === "ArrowDown") {
            for (let i = 0; i < 4; i++) {
                let col = [grid[i], grid[i + 4], grid[i + 8], grid[i + 12]];
                let res = operate(col.reverse());
                score += res.scoreAdd;
                let newCol = res.row.reverse();
                for (let j = 0; j < 4; j++) grid[i + j * 4] = newCol[j];
            }
        } else {
            return;
        }

        if (JSON.stringify(oldGrid) !== JSON.stringify(grid)) {
            generate();
            updateView();
            checkForWin();
            checkForGameOver();
        }
    });


    function checkForWin() {
        if (grid.some(tile => tile === 2048)) {
            resultText.innerHTML = 'You WIN!';
            resultDisplay.classList.add('game-won');
            resultDisplay.style.display = 'flex';
            document.removeEventListener('keyup', control);
        }
    }

    function checkForGameOver() {
        let zeros = 0;
        for (let i = 0; i < 16; i++) {
            if (grid[i] === 0) zeros++;
        }
        if (zeros === 0) {
            // Check adjacent matches
            let possible = false;
            // Check rows
            for (let i = 0; i < 16; i += 4) {
                if (grid[i] === grid[i + 1] || grid[i + 1] === grid[i + 2] || grid[i + 2] === grid[i + 3]) possible = true;
            }
            // Check cols
            for (let i = 0; i < 12; i++) {
                if (grid[i] === grid[i + 4]) possible = true;
            }

            if (!possible) {
                resultText.innerHTML = 'Game Over!';
                resultDisplay.classList.add('game-over');
                resultDisplay.style.display = 'flex';
            }
        }
    }

    restartBtn.addEventListener('click', createBoard);
    retryBtn.addEventListener('click', createBoard);

    createBoard();
});
