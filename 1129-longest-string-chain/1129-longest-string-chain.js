/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    let dp = {};
    let longest = 0;

    for (let word of words) {
        let currentLongest = 0;
        for (let i = 0; i < word.length; i++) {
            let prev = word.slice(0, i) + word.slice(i + 1);
            currentLongest = Math.max(currentLongest, (dp[prev] || 0) + 1);
        }
        dp[word] = currentLongest;
        longest = Math.max(longest, currentLongest);
    }

    return longest;
};