/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Ignore leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Check if the next character is '-' or '+'
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // Read in next the characters until the next non-digit character or the end of the input is reached
    while (s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - 0);
        if (result * sign < INT_MIN) return INT_MIN;
        if (result * sign > INT_MAX) return INT_MAX;
        i++;
    }

    // Return the integer as the final result
    return result * sign;
};