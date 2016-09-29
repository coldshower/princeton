// binary heap

// uses array and indexes to represent a binary tree
// starts information at index 1 for correct arithmetic
// parent of k = k / 2
// chilren of k = 2k and 2k + 1

// tree representation

function BinaryHeap (rootVal) {
	this.heap = [null, rootVal];
}

BinaryHeap.prototype.insert = function (val) {
	this.heap.push(val);
	this.swim(this.heap.length - 1);
};

BinaryHeap.prototype.deleteMax = function () {
	var max = this.heap[1];
	this.swap(this.heap[1], this.heap[this.heap.length - 1]);
	this.heap.pop();
	this.sink(1);
	return max;
};

BinaryHeap.prototype.swim = function (index) {
	var parentIndex;
	while (index > 1) {
		parentIndex = Math.floor(index / 2);
		if (this.heap[index] <= this.heap[parentIndex]) {
			break;
		}
		this.swap(index, parentIndex);
		index = parentIndex;
	}
};

BinaryHeap.prototype.sink = function (index) {
	var childIndex;
	while (2 * index <= this.heap.length - 1) {
		childIndex = 2 * index;
		if (childIndex < this.heap.length - 1 && this.smaller(childIndex, childIndex + 1)) {
			childIndex += 1;
		}
		if (this.smaller(childIndex, index)) {
			break;
		}
		this.swap(index, childIndex);
		index = childIndex;
	}
};

BinaryHeap.prototype.swap = function (first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
};

BinaryHeap.prototype.smaller = function (num1, num2) {
	return this.heap[num1] < this.heap[num2];
};

