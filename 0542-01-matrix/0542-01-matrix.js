/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let queue = [];
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Initialize the result matrix with maximum value
    let res = new Array(m).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

    // Push all 0 cells into the queue
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(mat[i][j] === 0) {
                res[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS
    while(queue.length) {
        let [x, y] = queue.shift();
        for(let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if(nx >= 0 && nx < m && ny >= 0 && ny < n) {
                if(res[nx][ny] > res[x][y] + 1) {
                    res[nx][ny] = res[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return res;
};