/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let prevCount = 0, currCount = 0, maxCount = 0;
    let hasZero = false;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
        } else {
            if (hasZero) {
                maxCount = Math.max(maxCount, prevCount + currCount);
                prevCount = currCount;
                currCount = 0;
            } else {
                hasZero = true;
                maxCount = Math.max(maxCount, prevCount + currCount);
                prevCount = currCount;
                currCount = 0;
            }
        }
    }

    if (hasZero) {
        maxCount = Math.max(maxCount, prevCount + currCount);
    } else if (prevCount !== nums.length) {
        maxCount = Math.max(maxCount, prevCount + currCount - 1);
    }

    return maxCount;
};