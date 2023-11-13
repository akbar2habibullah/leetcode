/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) {
        let count = Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            if (count[s.charCodeAt(i) - 'a'.charCodeAt(0)] > 1) return true;
        }
        return false;
    }
    let diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i);
        if (diff.length > 2) return false;
    }
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};