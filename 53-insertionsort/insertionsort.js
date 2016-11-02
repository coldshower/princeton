function insertionSort (arr) {
	for (var i = 1; i < arr.length; i++) {
		var j = i;
		while (j > 0 && arr[j] < arr[j - 1]) {
			swap(arr, j, j - 1);
			j -= 1;
		}
	}
	return arr;
}

function swap(arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}