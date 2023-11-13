/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++) {
        if(map[t[i]]) {
            map[t[i]]--;
        } else {
            return t[i];
        }
    }
};