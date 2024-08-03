// Define the size of the Sudoku grid
const gridSize = 9;
const numPreFilled = 20; // Number of cells to pre-fill

let puzzle = [];
let solution = [];

// Function to generate a random Sudoku board with some cells filled
function generateRandomPuzzle() {
    const puzzle = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
    let count = 0;
    while (count < numPreFilled) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        if (puzzle[row][col] === 0) {
            const num = Math.floor(Math.random() * 9) + 1;
            if (isValid(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                count++;
            }
        }
    }
    return puzzle;
}

// Function to solve the Sudoku puzzle using backtracking
function solvePuzzle(puzzle) {
    const emptyCell = findEmptyCell(puzzle);
    if (!emptyCell) return true; // Puzzle solved

    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
        if (isValid(puzzle, row, col, num)) {
            puzzle[row][col] = num;
            if (solvePuzzle(puzzle)) return true;
            puzzle[row][col] = 0; // Backtrack
        }
    }
    return false;
}

// Helper function to find the next empty cell
function findEmptyCell(puzzle) {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (puzzle[row][col] === 0) return [row, col];
        }
    }
    return null;
}

// Function to check if a number can be placed in a cell
function isValid(puzzle, row, col, num) {
    if (puzzle[row].includes(num)) return false;
    for (let i = 0; i < gridSize; i++) {
        if (puzzle[i][col] === num) return false;
    }
    const boxRowStart = Math.floor(row / 3) * 3;
    const boxColStart = Math.floor(col / 3) * 3;
    for (let r = boxRowStart; r < boxRowStart + 3; r++) {
        for (let c = boxColStart; c < boxColStart + 3; c++) {
            if (puzzle[r][c] === num) return false;
        }
    }
    return true;
}

// Function to create the Sudoku board
function createSudokuBoard() {
    const board = document.getElementById('sudoku-board');
    puzzle = generateRandomPuzzle();
    solution = JSON.parse(JSON.stringify(puzzle)); // Copy the puzzle for solution purposes
    solvePuzzle(solution);

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.className = 'sudoku-cell';

            const value = puzzle[row][col];
            if (value !== 0) {
                cell.value = value;
                cell.disabled = true;
                cell.style.backgroundColor = '#e0e0e0'; // Light gray background for filled cells
            } else {
                cell.addEventListener('input', function (event) {
                    if (event.target.value && !/^[1-9]$/.test(event.target.value)) {
                        event.target.value = '';
                    }
                });
            }

            board.appendChild(cell);
        }
    }
}

// Function to reveal the solution
function showSolution() {
    const cells = document.querySelectorAll('#sudoku-board .sudoku-cell');
    cells.forEach((cell, index) => {
        if (!cell.disabled) {
            cell.value = solution[Math.floor(index / gridSize)][index % gridSize];
        }
    });
}

// Function to clear the board
function clearBoard() {
    const cells = document.querySelectorAll('#sudoku-board .sudoku-cell');
    cells.forEach(cell => {
        if (!cell.disabled) {
            cell.value = '';
        }
    });
}

// Initialize the Sudoku board and add event listeners on page load
window.onload = function() {
    createSudokuBoard();
    document.getElementById('show-answer').addEventListener('click', showSolution);
    document.getElementById('clear-board').addEventListener('click', clearBoard);
};
