function quickSort (arr, p, r) {
	randomShuffle(arr, p, r);
	var pivot = partition(arr, p, r);
	quickSort(arr, p, pivot - 1);
	quickSort(arr, pivot + 1, r);
	return arr;
}

function partition (arr, p, r) {
	var q = left;
	for (var right = left; right < r; right++) {
		if (arr[right] <= arr[r]) {
			swap(arr, q, right);
			q += 1;
		}
	}
	swap(array, q, r);
	return q;
}

function swap (arr, firstIndex, secondIndex) {
	var temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[firstIndex] = temp;
}

function randomShuffle (arr, p, r) {
	for (var i = p; i < r; i++) {
		var randomNum = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[randomNum];
		arr[randomNum] = temp;
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
