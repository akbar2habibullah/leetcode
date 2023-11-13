/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let map = new Map();
    let min = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            min = Math.min(min, i - map.get(cards[i]) + 1);
        }
        map.set(cards[i], i);
    }

    return min === Infinity ? -1 : min;
};