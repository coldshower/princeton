function selectSort (arr) {
	for (var i = 0; i < arr.length; i++) {
		var minIndex;
		var temp;
		for (var j = i + 1; j < arr.length; j++) {
			if (!minIndex || arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	return arr;
}

function swap (arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}