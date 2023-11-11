/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
    rides.sort((a, b) => a[1] - b[1]);

    let dp = new Array(n + 1).fill(0);

    let j = 0;

    for (let i = 1; i <= n; i++) {

        dp[i] = dp[i - 1];

        while (j < rides.length && rides[j][1] === i) {

            dp[i] = Math.max(dp[i], dp[rides[j][0]] + rides[j][1] - rides[j][0] + rides[j][2]);

            j++;
        }
    }

    return dp[n];
};