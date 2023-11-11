/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n), () => Array(n).fill(0));

    for (let len = 1; len <= n; len++) {
        for (let start = 0; start <= n - len; start++) {
            let end = start + len - 1;
            dp[start][end] = len; // Initialize with the maximum possible turns

            for (let k = start; k < end; k++) {
                let turns = dp[start][k] + dp[k + 1][end] - (s[k] === s[end] ? 1 : 0);
                dp[start][end] = Math.min(dp[start][end], turns);
            }
        }
    }

    return dp[0][n - 1];
};