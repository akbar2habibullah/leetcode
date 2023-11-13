/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    let result = [];
    
    function generateCombination(i, s) {
        if(i === digits.length) {
            result.push(s);
            return;
        }
        
        let letters = map[digits[i]];
        for(let j = 0; j < letters.length; j++) {
            generateCombination(i + 1, s + letters[j]);
        }
    }
    
    generateCombination(0, '');
    return result;
};