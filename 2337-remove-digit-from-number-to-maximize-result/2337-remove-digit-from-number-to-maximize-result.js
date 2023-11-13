/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let maxIndex = -1;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            maxIndex = i;
            if (i < number.length - 1 && number[i] < number[i + 1]) {
                break;
            }
        }
    }
    return number.slice(0, maxIndex) + number.slice(maxIndex + 1);
};