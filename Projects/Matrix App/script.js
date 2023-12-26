function parseMatrix(input) {
    return input.trim().split('\n').map(row => row.split(' ').map(Number));
}

function displayMatrix(matrix, outputId) {
    document.getElementById(outputId).value = matrix.map(row => row.join(' ')).join('\n');
}

function transposeMatrix() {
    const matrixInput = document.getElementById('matrixInput').value;
    const matrix = parseMatrix(matrixInput);

    const transposedMatrix = transpose(matrix);

    displayMatrix(transposedMatrix, 'resultOutput');
}

function adjointMatrix() {
    const matrixInput = document.getElementById('matrixInput').value;
    const matrix = parseMatrix(matrixInput);

    const adjointMatrix = adjoint(matrix);

    displayMatrix(adjointMatrix, 'resultOutput');
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function adjoint(matrix) {
    if (matrix.length === 2 && matrix[0].length === 2) {
        return [
            [matrix[1][1], -matrix[0][1]],
            [-matrix[1][0], matrix[0][0]]
        ];
    } else if (matrix.length === 3 && matrix[0].length === 3) {
        const cofactorMatrix = [
            [matrix[1][1]*matrix[2][2] - matrix[1][2]*matrix[2][1], -(matrix[1][0]*matrix[2][2] - matrix[1][2]*matrix[2][0]), matrix[1][0]*matrix[2][1] - matrix[1][1]*matrix[2][0]],
            [-(matrix[0][1]*matrix[2][2] - matrix[0][2]*matrix[2][1]), matrix[0][0]*matrix[2][2] - matrix[0][2]*matrix[2][0], -(matrix[0][0]*matrix[2][1] - matrix[0][1]*matrix[2][0])],
            [matrix[0][1]*matrix[1][2] - matrix[0][2]*matrix[1][1], -(matrix[0][0]*matrix[1][2] - matrix[0][2]*matrix[1][0]), matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]]
        ];

        return transpose(cofactorMatrix);
    } else {
        alert('Adjoint calculation is supported for 2x2 and 3x3 matrices only.');
        return [];
    }
}
