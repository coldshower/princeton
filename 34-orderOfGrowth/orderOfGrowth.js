var array = [4, 7, 10, 14, 15, 20, 26, 50];

function bsFind (key, sortedArray) {

	function recurse (start, end) {
		var middle = Math.floor((end - start) / 2 + start);

		if (start >= end) {
			return -1;
		}

		if (key === sortedArray[middle]) {
			return middle;
		} else if (key > sortedArray[middle]) {
			return recurse(middle + 1, end);
		} else {
			return recurse(start, middle - 1);
		}
	}

	return recurse(0, sortedArray.length - 1);
}

function returnIndexIterative (key, sortedArray) {
	var low = 0,
		high = sortedArray.length - 1,
		mid;

	while (low <= high) {
		mid = Math.floor((high - low) / 2 + low);
		if (key === sortedArray[mid]) {
			return mid;
		} else if (key < sortedArray[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return -1;
}

returnIndex (6, array);