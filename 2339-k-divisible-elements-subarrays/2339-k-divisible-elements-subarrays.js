/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    let set = new Set();
    let count = 0;
    let left = 0;
    let divisibleCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % p === 0) {
            divisibleCount++;
        }

        while (divisibleCount > k) {
            if (nums[left] % p === 0) {
                divisibleCount--;
            }
            left++;
        }

        for (let i = left; i <= right; i++) {
            let subarray = nums.slice(i, right + 1);
            let subarrayString = subarray.join(',');
            if (!set.has(subarrayString)) {
                set.add(subarrayString);
                count++;
            }
        }
    }

    return count;
};