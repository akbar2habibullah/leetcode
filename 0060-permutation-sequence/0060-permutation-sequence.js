/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];
    let factorial = [1];
    let result = '';

    for (let i = 1; i <= n; i++) {
        nums.push(i);
        factorial[i] = factorial[i - 1] * i;
    }

    k--;

    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / factorial[i - 1]);
        k %= factorial[i - 1];
        result += nums[j];
        nums.splice(j, 1);
    }

    return result;
};