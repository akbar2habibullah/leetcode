/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        } else {
            return -1;
        }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key));
        }
        if (this.map.size === this.capacity) {
            this.remove(this.tail.prev);
        }
        this.insert(new Node(key, value));
};

LRUCache.prototype.remove = function(node) {
        this.map.delete(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
};

LRUCache.prototype.insert = function(node) {
        this.map.set(node.key, node);
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */