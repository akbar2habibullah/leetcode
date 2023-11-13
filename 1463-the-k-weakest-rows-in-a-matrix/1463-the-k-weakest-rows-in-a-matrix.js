/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let strength = [];
    for(let i = 0; i < mat.length; i++) {
        let count = 0;
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 1) {
                count++;
            } else {
                break;
            }
        }
        strength.push({index: i, soldiers: count});
    }
    
    strength.sort((a, b) => a.soldiers - b.soldiers || a.index - b.index);
    
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(strength[i].index);
    }
    
    return result;
};