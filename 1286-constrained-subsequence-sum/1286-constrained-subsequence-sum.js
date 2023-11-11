/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    let heap = [];
    for (let i = 0; i < n; i++) {
        while (heap.length && i - heap[0][1] > k) {
            heap.shift();
        }
        dp[i] = nums[i] + (heap.length ? heap[0][0] : 0);
        while (heap.length && dp[i] > heap[heap.length - 1][0]) {
            heap.pop();
        }
        if (dp[i] > 0) {
            heap.push([dp[i], i]);
        }
    }
    return Math.max(...dp);
};