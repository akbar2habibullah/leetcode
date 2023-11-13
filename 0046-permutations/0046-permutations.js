/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    if (nums.length === 1) {
        result.push(nums.slice());
        return result;
    }
    for (let i = 0; i < nums.length; i++) {
        let n = nums.shift();
        let perms = permute(nums);
        for (let perm of perms) {
            perm.push(n);
        }
        result = result.concat(perms);
        nums.push(n);
    }
    return result;
};