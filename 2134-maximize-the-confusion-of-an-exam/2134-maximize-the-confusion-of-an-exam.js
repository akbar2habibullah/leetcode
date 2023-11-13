/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let maxFreq = 0;
    let maxCount = 0;
    let count = {'T': 0, 'F': 0};
    let start = 0;

    for (let end = 0; end < answerKey.length; end++) {
        maxFreq = Math.max(maxFreq, ++count[answerKey[end]]);
        if (end - start + 1 - maxFreq > k) {
            count[answerKey[start]]--;
            start++;
        }
        maxCount = Math.max(maxCount, end - start + 1);
    }

    return maxCount;
};