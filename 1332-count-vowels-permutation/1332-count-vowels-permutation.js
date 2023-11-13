/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const MOD = 1e9 + 7;
    let dp = [[1, 1, 1, 1, 1]];

    for (let i = 1; i < n; i++) {
        dp[i] = [];
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % MOD;
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
        dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % MOD;
        dp[i][3] = dp[i - 1][2];
        dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    }

    return dp[n - 1].reduce((a, b) => (a + b) % MOD, 0);
};