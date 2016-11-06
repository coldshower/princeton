function SymbolTable() {
  this.table = {};
}

SymbolTable.prototype.put = function (key, value) {
  this.table[key] = value;
};

SymbolTable.prototype.get = function (key) {
  return this.table[key] || null;
};

SymbolTable.prototype.contains = function (key) {
  return this.table[key] !== null;
};

SymbolTable.prototype.delete = function (key) {
  this.put(key, null);
};

SymbolTable.prototype.size = function () {
  var count = 0;
  for (var key in this.table) {
    count += 1;
  }
  return count;
};