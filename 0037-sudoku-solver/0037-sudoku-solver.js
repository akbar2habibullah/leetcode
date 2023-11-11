/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if(solve(board))
        return board;
    else 
        return [];
};

function solve(board){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] === '.'){
                for(let c = 1; c <= 9; c++){
                    if(isValid(board, i, j, c.toString())){
                        board[i][j] = c.toString();
                        if(solve(board))
                            return true;
                        else
                            board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, c){
    for(let i = 0; i < 9; i++) {
        if(board[i][col] !== '.' && board[i][col] === c) return false; //check row
        if(board[row][i] !== '.' && board[row][i] === c) return false; //check column
        if(board[3 * Math.floor(row / 3) + Math.floor(i / 3)][ 3 * Math.floor(col / 3) + i % 3] !== '.' && 
           board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === c) return false; //check 3x3 block
    }
    return true;
}