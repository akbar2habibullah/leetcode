/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while(columnNumber > 0) {
        columnNumber--;
        let charCode = String.fromCharCode('A'.charCodeAt(0) + columnNumber % 26);
        result = charCode + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};