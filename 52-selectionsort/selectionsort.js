function selectSort (arr) {
	for (var i = 0; i < arr.length; i++) {
		var minIndex;
		var temp;
		for (var j = i + 1; j < arr.length; j++) {
			if (!minIndex || arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}