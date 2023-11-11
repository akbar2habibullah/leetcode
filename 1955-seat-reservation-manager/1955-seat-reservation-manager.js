/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seats = new Array(n).fill(0).map((_, i) => i + 1);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.seats.shift();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    let index = 0;
        while (this.seats[index] < seatNumber) {
            index++;
        }
        this.seats.splice(index, 0, seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */