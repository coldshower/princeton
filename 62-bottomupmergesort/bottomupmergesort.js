// no recursion

function bottomUpMergeSort (arr) {
	var size = 1;
	while (size <= arr.length) {
		for (var i = 0; i < arr.length; i += size) {
			var end = Math.min(i + size, arr.length - 1);
			var second = Math.round(i + (end - i)/ 2);
			merge(arr, i, second, end);
		}
		size *= 2;
	}
	return arr;
}

function merge (arr, first, second, last) {
	var result = arr.slice();

	var i = first, j = second;
	for (var k = first; k <= last; k++) {
		if (j > last) {
			arr[k] = result[i];
			i += 1;
		} else if (i >= second) {
			arr[k] = result[j];
			j += 1;
		} else if (result[i] <= result[j]) {
			arr[k] = result[i];
			i += 1;
		} else {
			arr[k] = result[j];
			j += 1;
		}
	}

	return arr;
}
