/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    let str = "1";
    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;
        for (let j = 1; j < str.length; j++) {
            if (str[j] === str[j - 1]) {
                count++;
            } else {
                temp += count.toString() + str[j - 1];
                count = 1;
            }
        }
        str = temp + count.toString() + str[str.length - 1];
    }

    return str;
};