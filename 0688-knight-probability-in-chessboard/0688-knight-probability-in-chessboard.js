/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const directions = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];
    let dp = Array.from(Array(n), () => Array.from(Array(n), () => Array(k + 1).fill(0)));
    dp[row][column][0] = 1;
    for (let moves = 1; moves <= k; moves++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let dir of directions) {
                    let prevI = i - dir[0], prevJ = j - dir[1];
                    if (prevI >= 0 && prevI < n && prevJ >= 0 && prevJ < n) {
                        dp[i][j][moves] += dp[prevI][prevJ][moves - 1] / 8;
                    }
                }
            }
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += dp[i][j][k];
        }
    }
    return res;
};