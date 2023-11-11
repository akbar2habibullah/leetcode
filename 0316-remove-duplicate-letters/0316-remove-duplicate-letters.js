/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let seen = new Set();
    let lastOccurrence = new Map();
    
    for(let i = 0; i < s.length; i++) {
        lastOccurrence.set(s[i], i);
    }
    
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if(!seen.has(c)) {
            while(stack.length > 0 && c < stack[stack.length - 1] && lastOccurrence.get(stack[stack.length - 1]) > i) {
                seen.delete(stack.pop());
            }
            seen.add(c);
            stack.push(c);
        }
    }
    
    return stack.join('');
};