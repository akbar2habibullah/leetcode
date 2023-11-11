/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let dp = new Array(101).fill(0).map(() => new Array(101).fill(0));
    dp[0][0] = poured;
    for (let i = 0; i <= query_row; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[i][j] > 1) {
                let overflow = dp[i][j] - 1;
                dp[i][j] = 1;
                dp[i + 1][j] += overflow / 2;
                dp[i + 1][j + 1] += overflow / 2;
            }
        }
    }
    return Math.min(dp[query_row][query_glass], 1);
};