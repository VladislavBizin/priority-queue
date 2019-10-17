const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
		this._size = 0;
	}

	push(data, priority) {
		if(this._size >= this.maxSize){
			throw "Error";
		} else {
			this.heap.push(data,priority);
			this._size += 1;
			return this;
		}
	}

	shift() {
		if(this.isEmpty()) throw "error";
		this._size -= 1;
		return this.heap.pop();
	}

	size() {
		return this._size;
	}

	isEmpty() {
		return this._size <= 0;
	}
}

module.exports = PriorityQueue;
