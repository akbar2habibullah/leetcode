/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
    let ratioMap = new Map();
    let count = 0;
    
    for(let i = 0; i < rectangles.length; i++) {
        let ratio = rectangles[i][0] / rectangles[i][1];
        
        if(ratioMap.has(ratio)) {
            count += ratioMap.get(ratio);
            ratioMap.set(ratio, ratioMap.get(ratio) + 1);
        } else {
            ratioMap.set(ratio, 1);
        }
    }
    
    return count;
};