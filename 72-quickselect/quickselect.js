function quickSelect(arr, p, r, k) {
	randomShuffle(arr);
	var pivot = partition(arr, p, r);
	if (k === pivot + 1) {
		return arr[pivot];
	}
	if (k <= pivot + 1) {
		return quickSelect(arr, p, pivot - 1, k);
	}
	 
	return quickSelect(arr, pivot + 1, r, k);
	
}

function partition(arr, p, r) {
	var left = p;
	for (var right = p; right < r; right++) {
		if (arr[right] <= arr[r]) {
			swap(arr, right, left);
			left += 1;
		}
	}
	swap(arr, left, r);
	return left;
}

function swap(arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}

function randomShuffle(arr, p, r) {
	for (var i = p; i < r; i++) {
		var randomNum = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[randomNum];
		arr[randomNum] = temp;
	}
	return arr;
}


// worst case O(n^2) but chances of that are extremely small
// average case is linear time
