/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let dp = new Array(arr.length).fill(1);
    let map = new Map();
    let max = 1;

    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i] - difference)) {
            dp[i] = dp[map.get(arr[i] - difference)] + 1;
        }
        map.set(arr[i], i);
        max = Math.max(max, dp[i]);
    }

    return max;
};