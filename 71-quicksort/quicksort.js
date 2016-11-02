function quickSort (arr, first, last) {
	if (first >= last) {
		return arr;
	}
	randomShuffle(arr, first, last);
	var pivot = partition(arr, first, last);
	quickSort(arr, first, pivot - 1);
	quickSort(arr, pivot + 1, last);
	return arr;
}

function partition (arr, first, last) {
	var left = first;
	for (var right = first; right < last; right++) {
		if (arr[right] < arr[last]) {
			swap(arr, left, right);
			left += 1;
		}
	}
	swap(arr, left, last);
	return left;
}

function swap (arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}

function randomShuffle (arr, first, last) {
	for (var i = first; i <= last; i++) {
		var randomNum = Math.floor(Math.random() * (last + 1 - i)) + i;
		swap(arr, i, randomNum);
	}
	return arr;
}

// insertion sort over quicksort if array size less than 10. not as much overhead. 
// deal with duplicate keys using Dijikstra's 3 way partitioning

// best choice for pivot is median, so finding median can be worth it. 
// for medium arrays, can sample 3 and take median from them to use
// for large arrays, can use Tukey's ninther

// however, there are still killer inputs, and only way to avoid is by
// randomizing
