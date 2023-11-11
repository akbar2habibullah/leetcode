/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return [];
    let deque = [], result = [];
    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the back of the deque that are smaller than the current number
        while (deque.length && nums[i] > deque[deque.length - 1]) deque.pop();
        deque.push(nums[i]);
        // If the window has reached size k, add the maximum to the result
        if (i >= k - 1) {
            result.push(deque[0]);
            // If the maximum is about to slide out of the window, remove it from the deque
            if (nums[i - k + 1] === deque[0]) deque.shift();
        }
    }
    return result;
};