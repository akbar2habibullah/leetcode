/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    });

    let set = new Set(words);

    for (let word of words) {
        let canBuild = true;
        for (let i = 1; i < word.length; i++) {
            if (!set.has(word.slice(0, i))) {
                canBuild = false;
                break;
            }
        }
        if (canBuild) {
            return word;
        }
    }

    return "";
};