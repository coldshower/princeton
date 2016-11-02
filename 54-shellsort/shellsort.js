function shellSort (arr) {
	var h = 1;
	while (h < arr.length / 3) {
		h = 3 * h + 1;
	}

	while (h > 0) {
		for (var i = 1; i < arr.length; i++) {
			var j = i;

			while (arr[j] < arr[j - h]) {
				swap(arr, j, j - h);
				j -=1;
			}
		}
		h = (h - 1) / 3;
	}

	return arr;
}

function swap(arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}