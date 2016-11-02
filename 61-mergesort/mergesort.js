function mergeSort (arr, first, last) {
	if (first >= last) {
		return arr;
	}
	
	var second = Math.floor(first + (last - first) / 2);
	
	mergeSort(arr, first, second);
	mergeSort(arr, second + 1, last);
	
	return merge(arr, first, second + 1, last);
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

// optimizations: 

// use insertion sort for smaller arrays since no function
// overhead needed from recursive call

// should stop if already sorted. if biggest in first half is 
// less than smallest in second half, it is already merged