function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToTail = function (value) {
  var newTail = new Node(value);
  if (this.tail) {
    this.tail.next = newTail;
  } else {
    this.head = newTail;
  }
  this.tail = newTail;
}

LinkedList.prototype.search = function (value) {
  var current = this.head;

  while (current) {
    if (current.value === value) {
      return current;
    }
    current = current.next;
  }
  return false;
}

function AArrayLL() {
  this.table = new LinkedList();
}

AArrayLL.prototype.insert = function (key, value) {

}