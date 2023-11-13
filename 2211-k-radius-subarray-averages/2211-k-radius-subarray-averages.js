/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let n = nums.length;
    let windowSum = 0;
    let res = new Array(n).fill(-1);

    for (let i = 0; i < n; ++i) {
        windowSum += nums[i]; // expand window to the right
        if (i >= 2 * k) { // window is big enough
            res[i - k] = Math.floor(windowSum / (2 * k + 1)); // calculate average
            windowSum -= nums[i - 2 * k]; // shrink window from the left
        }
    }

    return res;
};