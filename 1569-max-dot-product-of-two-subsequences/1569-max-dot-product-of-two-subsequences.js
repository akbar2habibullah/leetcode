/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let dp = Array.from(new Array(m+1), () => new Array(n+1).fill(-Infinity));
    dp[0][0] = 0;
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            dp[i][j] = Math.max(dp[i-1][j-1] + nums1[i-1]*nums2[j-1], dp[i-1][j], dp[i][j-1], nums1[i-1]*nums2[j-1]);
        }
    }
    return dp[m][n];
};