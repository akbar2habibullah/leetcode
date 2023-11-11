/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length;
    if (n <= 1) return n;
    let lengths = new Array(n).fill(1);
    let counts = new Array(n).fill(1);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                if (lengths[i] >= lengths[j]) {
                    lengths[j] = lengths[i] + 1;
                    counts[j] = counts[i];
                } else if (lengths[i] + 1 === lengths[j]) {
                    counts[j] += counts[i];
                }
            }
        }
    }
    let longest = 0, ans = 0;
    for (let length of lengths) {
        longest = Math.max(longest, length);
    }
    for (let i = 0; i < n; ++i) {
        if (lengths[i] === longest) {
            ans += counts[i];
        }
    }
    return ans;
};