/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let sArr = s.split('');
    let vowelArr = sArr.filter(c => vowels.includes(c)).sort();
    let j = 0;
    for(let i = 0; i < sArr.length; i++) {
        if(vowels.includes(sArr[i])) {
            sArr[i] = vowelArr[j];
            j++;
        }
    }
    return sArr.join('');
};