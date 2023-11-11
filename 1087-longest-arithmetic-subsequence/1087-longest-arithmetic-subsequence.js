/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let dp = new Array(nums.length);
    let max = 0;
    for(let i=0; i<nums.length; i++) {
        dp[i] = new Map();
        for(let j=0; j<i; j++) {
            let diff = nums[i] - nums[j];
            dp[i].set(diff, (dp[j].get(diff) || 1) + 1);
            max = Math.max(max, dp[i].get(diff));
        }
    }
    return max;
};