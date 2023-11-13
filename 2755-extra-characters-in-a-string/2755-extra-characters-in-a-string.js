/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let n = s.length;
    let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let word of dictionary) {
            if (s.slice(0, i).endsWith(word)) {
                dp[i] = Math.min(dp[i], dp[i - word.length]);
            }
        }
        dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    }
    return dp[n];
};