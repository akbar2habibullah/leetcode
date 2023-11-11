
var MyCalendar = function() {
    this.events = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let event of this.events) {
            if (start < event.end && end > event.start) {
                return false;
            }
        }
        this.events.push({start, end});
        return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */