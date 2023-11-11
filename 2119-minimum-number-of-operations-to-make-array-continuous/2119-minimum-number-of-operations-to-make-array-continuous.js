/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let res = n;
    let right = 0;
    let sortedNums = [...new Set(nums)].sort((a, b) => a - b);
    for (let left = 0; left < sortedNums.length; left++) {
        while (right < sortedNums.length && sortedNums[right] - sortedNums[left] <= n - 1) {
            right++;
        }
        res = Math.min(res, n - (right - left));
    }
    return res;
};