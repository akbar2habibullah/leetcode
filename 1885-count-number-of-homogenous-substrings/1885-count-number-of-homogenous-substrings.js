/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let mod = 1e9 + 7;
    let count = 0;
    let i = 0;
    while(i < s.length) {
        let j = i;
        while(j < s.length && s[j] == s[i]) {
            j++;
        }
        let n = j - i;
        count = (count + n * (n + 1) / 2) % mod;
        i = j;
    }
    return count;
};