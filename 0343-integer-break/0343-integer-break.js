/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n < 2 || n > 58) {
        return -1; // return -1 for invalid input
    }

    let dp = new Array(n+1).fill(0);
    dp[1] = 1;

    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= Math.floor(i/2); j++) {
            dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i-j, dp[i-j]));
        }
    }

    return dp[n];
};