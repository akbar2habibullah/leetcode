/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        while (stack.length !== 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            let diff = asteroid + stack[stack.length - 1];
            if (diff < 0) {
                stack.pop();
            } else if (diff > 0) {
                asteroid = 0;
            } else {
                asteroid = 0;
                stack.pop();
            }
        }

        if (asteroid !== 0) {
            stack.push(asteroid);
        }
    }

    return stack;
};