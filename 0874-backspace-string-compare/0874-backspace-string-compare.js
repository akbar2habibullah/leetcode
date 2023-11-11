/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1, j = t.length - 1;
    while (i >= 0 || j >= 0) {
        i = process(s, i);
        j = process(t, j);
        if (i < 0 && j < 0) return true;
        if (i < 0 || j < 0) return false;
        if (s[i] !== t[j]) return false;
        i--;
        j--;
    }
    return true;
};

function process(str, i) {
    let skip = 0;
    while (i >= 0) {
        if (str[i] === '#') {
            skip++;
            i--;
        } else if (skip > 0) {
            skip--;
            i--;
        } else {
            break;
        }
    }
    return i;
}