function LinkedList () {
	this.first = null;
	this.last = null;
}

function Node (value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.addToTail = function (value) {
	var newTail = new Node(value);
	if (this.last) {
		this.last.next = newTail;
	}
	this.last = newTail;
	this.first = newTail;
};

LinkedList.prototype.removeHead = function () {
	var oldFirst = this.first;
	if (this.first) {
		this.first = this.first.next;
	}
	return oldFirst;
};


function QueueLL () {
	this.queue = new LinkedList();
}

QueueLL.prototype.dequeue = function () {
	return this.queue.removeHead();
};

QueueLL.prototype.enqueue = function (val) {
	this.queue.addToTail(val);
};

// Linked List vs Circular Buffer Implementation

function Queue () {

}

Queue.prototype.dequeue = function () {

};

Queue.prototype.enqueue = function (val) {

};