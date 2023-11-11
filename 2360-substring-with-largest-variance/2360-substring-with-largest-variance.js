/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    let maxVariance = 0;
    let charCount = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            if (i === j || charCount[i] === 0 || charCount[j] === 0) {
                continue;
            }
            let major = 0;
            let minor = 0;
            let restMinor = charCount[j];
            for (let char of s) {
                if (char.charCodeAt(0) - 97 === i) {
                    major++;
                }
                if (char.charCodeAt(0) - 97 === j) {
                    minor++;
                    restMinor--;
                }
                if (minor > 0) {
                    maxVariance = Math.max(maxVariance, major - minor);
                }
                if (major < minor && restMinor > 0) {
                    major = 0;
                    minor = 0;
                }
            }
        }
    }
    return maxVariance;
};