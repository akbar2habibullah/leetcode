/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = new Map();
    let res = 0;
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        res += count.get(num) - 1;
    }
    return res;
};