/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    const mod = 1e9 + 7;
    const maxColumn = Math.min(arrLen - 1, steps);
    let dp = new Array(maxColumn + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= steps; i++) {
        const dpNext = new Array(maxColumn + 1).fill(0);
        for (let j = 0; j <= maxColumn; j++) {
            dpNext[j] = dp[j];
            if (j - 1 >= 0) {
                dpNext[j] = (dpNext[j] + dp[j - 1]) % mod;
            }
            if (j + 1 <= maxColumn) {
                dpNext[j] = (dpNext[j] + dp[j + 1]) % mod;
            }
        }
        dp = dpNext;
    }

    return dp[0];
};