var quickUnionLazy = {
	initialize: function (length) {
		var result = [];
		for (var i = 0; i < length; i++) {
			result.push(i);
		}
		return result;
	},

	findRoot: function (idx, array) {
		return (idx === array[idx])? idx : findRoot(arr[idx]);
	},

	union: function (idx1, idx2, array) {
		array[findRoot(idx1, array)] = findRoot(idx2, array);
	},

	connected: function (idx1, idx2, array) {
		return findRoot(idx1, array) === findRoot(idx2, array);
	}
};