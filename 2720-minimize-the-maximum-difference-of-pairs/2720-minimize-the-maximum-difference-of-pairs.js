/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);
    let left = 0, right = nums[nums.length - 1] - nums[0];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (isPossible(nums, mid, p)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

function isPossible(nums, mid, p) {
    let count = 0, i = 0;
    while (i < nums.length - 1) {
        if (nums[i + 1] - nums[i] <= mid) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }
    return count >= p;
}