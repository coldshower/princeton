var quickFind = {
	initialize: function (length) {
		var result = [];
		for (var i = 0; i < length; i++) {
			result.push(i);
		}
		return result;
	},

	find: function (num1, num2, array) {
		return array[num1] === array[num2];
	},

	connect: function (num1, num2, array) {
		var id1 = array[num1],
			id2 = array[num2];
		for (var i = 0; i < array.length; i++) {
			if (array[i] === id1) {
				array[i] = id2;
			}
		}
	}
};