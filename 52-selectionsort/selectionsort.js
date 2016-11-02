function selectSort (arr) {
	var minIndex;
	for (var i = 0; i < arr.length; i++) {
		minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
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