function makeIterator (array) {
	var current = 0;
	return {
		next: function () {
			if (current < array.length) {
				current += 1;
				return array[current - 1];
			}
		}
	}
}