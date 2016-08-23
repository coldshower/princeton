// since JavaScript arrays are not true arrays, this is just a learning exercise to understand 
// how to implement dynamic arrays

// 1. naive

// push and pop causes array size to increase / decrease by 1

function naiveArray (size) {
	this.size = size;
	this.storage = new Array(size);
}

naiveArray.prototype.push = function (val) {
	var newArray = new Array(this.size + 1);
	for (var i = 0; i < this.size; i++) {
		newArray[i] = this.storage[i];
	}
	newArray[this.size] = val;
	this.size += 1;
	this.storage = newArray;
};

naiveArray.prototype.pop = function () {
	var newArray = new Array(this.size - 1);
	var popped = this.storage[this.size - 1];
	for (var i = 0; i < this.size - 1; i++) {
		newArray[i] = this.storage[i];
	}
	this.size -= 1;
	this.storage = newArray;
	return popped;
};

// 2. improvement

// double array size when array fills up.
// halve when array falls under half

// issue = thrashing which will happen from a push pop push sequence at halfway

// fix by just halving when it goes 1/4 full.
// array will always be 25 to 100% full

function dynamicArray (size) {
	this.size = size;
	this.storage = new Array(size);
	this.current = 0;
}

dynamicArray.prototype.push = function (val) {
	if (this.current === this.size) {
		var newArray = new Array(size * 2);
		for (var i = 0; i < this.size; i++) {
			newArray[i] = this.storage[i];
		}
		this.size *= 2;
		this.storage = newArray;
	} 
	this.storage[this.current] = val;
	this.current += 1;
};

dynamicArray.prototype.pop = function () {
	if (this.current) {
		var popped = this.storage[this.current - 1];
		this.current -= 1;
		if (this.current <= this.size / 4) {
			var newArray = new Array(this.size / 2);
			for (var i = 0; i < this.current; i++) {
				newArray[i] = this.storage[i];
			}
			this.storage = newArray;
			this.size /= 2;
		}
		return popped;
	}
};



