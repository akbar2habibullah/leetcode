/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    let n = nums.length;
    let prefixSums = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }

    let deque = [];
    let minLength = Infinity;
    for (let i = 0; i <= n; i++) {
        while (deque.length > 0 && prefixSums[i] - prefixSums[deque[0]] >= k) {
            minLength = Math.min(minLength, i - deque.shift());
        }
        while (deque.length > 0 && prefixSums[i] <= prefixSums[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
};