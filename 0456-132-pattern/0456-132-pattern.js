/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let secondNum = -Infinity;
    let stack = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < secondNum) {
            return true;
        } else {
            while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
                secondNum = stack.pop();
            }
        }
        stack.push(nums[i]);
    }

    return false;
};