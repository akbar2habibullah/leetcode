/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            dp[i + 1] = dp[i + 1] || dp[i - 1];
        }
        if (i > 1 && nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2]) {
            dp[i + 1] = dp[i + 1] || dp[i - 2];
        }
        if (i > 1 && nums[i] === nums[i - 1] + 1 && nums[i - 1] === nums[i - 2] + 1) {
            dp[i + 1] = dp[i + 1] || dp[i - 2];
        }
    }

    return dp[n];
};