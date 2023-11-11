/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let low = 0;
    let high = nums[n - 1] - nums[0];

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;
        let left = 0;
        for (let right = 0; right < n; right++) {
            while (nums[right] - nums[left] > mid) left++;
            count += right - left;
        }
        if (count >= k) high = mid;
        else low = mid + 1;
    }
    return low;
};