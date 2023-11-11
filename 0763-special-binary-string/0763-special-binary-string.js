/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    if (s.length <= 2) return s;
    let count = 0, i = 0;
    let res = [];
    for (let j = 0; j < s.length; ++j) {
        s[j] == '1' ? ++count : --count;
        if (count == 0) {
            res.push('1' + makeLargestSpecial(s.substring(i + 1, j)) + '0');
            i = j + 1;
        }
    }
    return res.sort().reverse().join('');
};