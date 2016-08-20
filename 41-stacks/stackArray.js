function Stack () {
	this.stack = [];
	this.size = 0;
}

Stack.prototype.push = function (val) {
	this.stack[this.size] = val;
};

Stack.prototype.pop = function () {
	if (this.size) {
		var popped = this.stack[this.size];
		this.size -= 1;
		return popped;
	}
	throw new Error('Stack is empty');
	
};

Stack.prototype.isEmpty = function () {
	return !this.size;
};
