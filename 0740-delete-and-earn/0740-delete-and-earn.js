/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let count = new Array(10001).fill(0);
    for (let num of nums) {
        count[num] += num;
    }
    let dp = new Array(10001).fill(0);
    dp[1] = count[1];
    for (let i = 2; i < count.length; i++) {
        dp[i] = Math.max(count[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[10000];
};