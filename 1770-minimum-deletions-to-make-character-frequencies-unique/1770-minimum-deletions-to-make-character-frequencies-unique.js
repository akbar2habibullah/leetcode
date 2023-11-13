/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let freq = new Array(26).fill(0);
    let deleteCount = 0;
    
    for(let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }
    
    freq.sort((a, b) => b - a);
    
    for(let i = 1; i < 26; i++) {
        while(freq[i] != 0 && freq[i] >= freq[i - 1]) {
            freq[i]--;
            deleteCount++;
        }
    }
    
    return deleteCount;
};