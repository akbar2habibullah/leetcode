/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const wordCount = {};
    words.forEach(word => {
        if (word in wordCount) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });
    const result = [];
    for (let i = 0; i < wordLength; i++) {
        let seenWords = {};
        let count = 0;
        let left = i;
        for (let j = i; j <= s.length - wordLength; j += wordLength) {
            const word = s.substring(j, j + wordLength);
            if (word in wordCount) {
                if (word in seenWords) {
                    seenWords[word]++;
                } else {
                    seenWords[word] = 1;
                }
                if (seenWords[word] <= wordCount[word]) {
                    count++;
                } else {
                    while (seenWords[word] > wordCount[word]) {
                        const leftWord = s.substring(left, left + wordLength);
                        seenWords[leftWord]--;
                        if (seenWords[leftWord] < wordCount[leftWord]) {
                            count--;
                        }
                        left += wordLength;
                    }
                }
                if (count === words.length) {
                    result.push(left);
                    const leftWord = s.substring(left, left + wordLength);
                    seenWords[leftWord]--;
                    count--;
                    left += wordLength;
                }
            } else {
                seenWords = {};
                count = 0;
                left = j + wordLength;
            }
        }
    }
    return result;
};