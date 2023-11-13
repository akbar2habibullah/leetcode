/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let cur = [];
    let numOfLetters = 0;

    for (let word of words) {
        if (word.length + cur.length + numOfLetters > maxWidth) {
            for (let i = 0; i < maxWidth - numOfLetters; i++) {
                let j = i % (cur.length === 1 ? 1 : cur.length - 1 || 1);
                cur[j] += ' ';
            }
            res.push(cur.join(''));
            cur = [];
            numOfLetters = 0;
        }
        cur.push(word);
        numOfLetters += word.length;
    }

    let lastLine = cur.join(' ');
    while (lastLine.length < maxWidth) lastLine += ' ';
    res.push(lastLine);

    return res;
};