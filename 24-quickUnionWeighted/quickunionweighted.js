var quickUnionWeighted = {
	initialize: function (length) {
		this.arr = [];
		this.size = [];
		for (var i = 0; i < length; i++) {
			this.arr[i] = i;
			this.size[i] = 1;
		}
	},
	findRoot: function (idx) {
		return (idx === this.arr[idx])? idx : this.findRoot(this.arr[idx]);
	},
	union: function (idx1, idx2) {
		var root1 = this.findRoot(idx1),
			root2 = this.findRoot(idx2);

		if (this.size[root1] <= this.size[root2]) {
			this.arr[root1] = root2;
			this.size[root2] += this.size[root1];
		} else {
			this.arr[root2] = root1;
			this.size[root1] += this.size[root2];
		}
	},
	connected: function (idx1, idx2) {
		return this.findRoot(idx1) === this.findRoot(idx2);
	}
};