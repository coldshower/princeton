var quickUnionLazy = {
	initialize: function (length) {
		var result = [];
		for (var i = 0; i < length; i++) {
			result.push(i);
		}
		return result;
	},

	findRoot: function (idx, array) {
		return (idx === array[idx])? idx : this.findRoot(array[idx], array);
	},

	union: function (idx1, idx2, array) {
		array[this.findRoot(idx1, array)] = this.findRoot(idx2, array);
	},

	connected: function (idx1, idx2, array) {
		return this.findRoot(idx1, array) === this.findRoot(idx2, array);
	}
};