/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    for (let n of nums) {
        if (candidate1 !== null && candidate1 === n) {
            count1++;
        } else if (candidate2 !== null && candidate2 === n) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = n;
            count1++;
        } else if (count2 === 0) {
            candidate2 = n;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    let result = [];
    count1 = 0;
    count2 = 0;

    for (let n of nums) {
        if (candidate1 !== null && n === candidate1) count1++;
        if (candidate2 !== null && n === candidate2) count2++;
    }

    if (count1 > nums.length / 3) result.push(candidate1);
    if (count2 > nums.length / 3) result.push(candidate2);

    return result;
};