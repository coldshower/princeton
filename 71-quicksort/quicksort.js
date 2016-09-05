function quickSort (arr, p, r) {
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