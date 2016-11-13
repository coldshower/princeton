function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToTail = function (key, value) {
  var newTail = new Node(key, value);
  if (this.tail) {
    this.tail.next = newTail;
  } else {
    this.head = newTail;
  }
  this.tail = newTail;
}

LinkedList.prototype.search = function (key) {
  var current = this.head;

  while (current) {
    if (current.key === key) {
      return current;
    }
    current = current.next;
  }
  return false;
}

function AArrayLL() {
  this.table = new LinkedList();
}

AArrayLL.prototype.get = function (key) {
  var result = this.table.search(key);
  return result ? result.value : null;
};

AArrayLL.prototype.put = function (key, value) {
  var result = this.table.search(key);
  if (result) {
    result.value = value;
  } else {
    this.table.addToTail(key, value);
  }
};

AArrayLL.prototype.delete = function (key) {
  this.put(key, null);
};