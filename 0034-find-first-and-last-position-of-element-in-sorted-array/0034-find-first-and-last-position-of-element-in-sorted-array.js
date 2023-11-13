/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];

    // Find the leftmost index where target appears
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    if (nums[start] !== target) {
        return result;
    } else {
        result[0] = start;
    }

    // Reset end to the end of the array
    end = nums.length - 1;

    // Find the rightmost index where target appears
    while (start < end) {
        let mid = Math.ceil((start + end) / 2);
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    result[1] = end;

    return result;
};