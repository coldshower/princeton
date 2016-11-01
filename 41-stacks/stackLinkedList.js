function StackLL () {
	this.first = null;
	this.size = null;
}

function Node (val) {
	this.value = val || null;
	this.next = null;
}

StackLL.prototype.push = function (nodeVal) {
	var newFirst = new Node(nodeVal),
		oldFirst = this.first;

	newFirst.next = oldFirst;
	this.first = newFirst;
};

StackLL.prototype.pop = function () {
	if (this.first) {
		var oldFirst = this.first;
		this.first = oldFirst.next;
		return oldFirst;
	}
};

Stack.prototype.getSize = function () {
	return this.size;
}

Stack.prototype.isEmpty = function () {
	return (!this.first);
}