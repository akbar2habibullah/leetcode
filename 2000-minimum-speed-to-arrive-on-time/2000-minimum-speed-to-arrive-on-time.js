/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let left = 1, right = 10**7;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canReachOnTime(dist, hour, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return canReachOnTime(dist, hour, left) ? left : -1;
};

function canReachOnTime(dist, hour, speed) {
    let time = 0;
    for (let i = 0; i < dist.length - 1; i++) {
        time += Math.ceil(dist[i] / speed);
    }
    time += dist[dist.length - 1] / speed;
    return time <= hour;
}