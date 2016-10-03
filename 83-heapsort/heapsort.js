// max-heapify an unsorted array
// repeatedly do the deleteMax method, but rather than deleting it, just
// put it into the 'sorted' zone

function heapSort(arr) {
	maxHeapify(arr);
	sort(arr);
	return arr;
}

function swap(arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}

function maxHeapify(arr) {
	arr.unshift(null);
	var current = arr.length - 1;
	while (current > 1) {
		sink(arr, current);
		current -= 1;
	}
}

function swim(arr, index) {
	var parentIndex;
	while (index > 1) {
		parentIndex = Math.floor(index / 2);
		if (smaller(arr, parentIndex, index)) {
			swap(arr, parentIndex, index);
			index = parentIndex;
		} else {
			break;
		}
	}
}

function sink(arr, index) {
	var childIndex;
	while (index <= arr.length - 1) {
		childIndex = 2 * index;
		if (childIndex <= arr.length - 1 && smaller(arr, childIndex, childIndex + 1)) {
			childIndex += 1;
		}
		if (!smaller(arr, index, childIndex)) {
			break;
		}
		swap(arr, index, childIndex);
		index = childIndex;
	}
}

function smaller(arr, first, second) {
	return arr[first] > arr[second];
}

function sort(arr) {
}