/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let i = k, j = k;
    let minVal = nums[k], maxScore = nums[k];

    while (i > 0 || j < nums.length - 1) {
        if (i === 0) {
            j++;
        } else if (j === nums.length - 1) {
            i--;
        } else if (nums[i - 1] < nums[j + 1]) {
            j++;
        } else {
            i--;
        }

        minVal = Math.min(minVal, nums[i], nums[j]);
        maxScore = Math.max(maxScore, minVal * (j - i + 1));
    }

    return maxScore;
};