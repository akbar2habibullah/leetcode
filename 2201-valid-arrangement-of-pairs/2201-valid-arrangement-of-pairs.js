/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    let graph = new Map();
    let degree = new Map();
    for(let pair of pairs){
        let start = pair[0], end = pair[1];
        if(!graph.has(start)) graph.set(start, []);
        graph.get(start).push(end);
        if(!degree.has(start)) degree.set(start, 0);
        if(!degree.has(end)) degree.set(end, 0);
        degree.set(start, degree.get(start) + 1);
        degree.set(end, degree.get(end) - 1);
    }

    let start;
    for(let [node, value] of degree.entries()){
        if(value > 0) {
            start = node;
            break;
        }
    }

    if(start === undefined) start = pairs[0][0];

    let stack = [];
    let result = [];
    stack.push(start);
    while(stack.length > 0){
        while(graph.get(stack[stack.length - 1]) && graph.get(stack[stack.length - 1]).length > 0){
            let next = graph.get(stack[stack.length - 1]).pop();
            stack.push(next);
        }
        result.push(stack.pop());
    }

    result.reverse();
    let res = [];
    for(let i = 0; i < result.length - 1; i++){
        res.push([result[i], result[i + 1]]);
    }
    return res;
};