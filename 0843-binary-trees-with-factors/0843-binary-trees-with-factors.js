/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const mod = 1e9 + 7;
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let dp = new Array(n).fill(1);
    let index = new Map();

    for (let i = 0; i < n; ++i)
        index.set(arr[i], i);

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j)
            if (arr[i] % arr[j] == 0) {
                let right = arr[i] / arr[j];
                if (index.has(right)) {
                    dp[i] += dp[j] * dp[index.get(right)];
                    dp[i] %= mod;
                }
            }
    }

    let ans = dp.reduce((sum, num) => sum + num, 0);
    return ans % mod;
};