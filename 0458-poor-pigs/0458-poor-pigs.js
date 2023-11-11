/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let states = Math.floor(minutesToTest / minutesToDie) + 1;
    let pigs = 0;
    while (Math.pow(states, pigs) < buckets) {
        pigs += 1;
    }
    return pigs;
};