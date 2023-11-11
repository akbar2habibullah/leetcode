/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, end = 0;

    let dp = Array(s.length).fill(null).map(() => Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        if (s[i] === s[i+1]) {
            dp[i][i+1] = true;
            start = i;
            end = i+1;
        }
    }

    for (let j = 2; j < s.length; j++) {
        for (let i = 0; i < j - 1; i++) {
            if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                if (j - i > end - start) {
                    start = i;
                    end = j;
                }
            }
        }
    }

    return s.substring(start, end + 1);
};