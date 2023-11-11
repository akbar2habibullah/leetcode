/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack = [];
    let result = [];
    let i = 0;
    let j = 1;
    while(i < target.length){
        stack.push(j);
        result.push("Push");
        if(target[i] == j){
            i++;
        }else{
            stack.pop();
            result.push("Pop");
        }
        j++;
    }
    return result;
};