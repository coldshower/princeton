function mergeSort (arr) {
	if (arr.length <= 1) {
		return arr;
	}

	var middle = Math.round(arr.length / 2),
		sorted1 = mergeSort(arr.slice(0, middle)),
		sorted2 = mergeSort(arr.slice(middle));

	return merge(sorted1, sorted2);
}

function merge (sorted1, sorted2) {
	var result = [],
		i = 0, j = 0;
	while (result.length < sorted1.length + sorted2.length) {
		if (sorted1[i] <= sorted2[j] || sorted2[j] === undefined) {
			result.push(sorted1[i]);
			i += 1;
		} else {
			result.push(sorted2[j]);
			j += 1;
		}
	}

	return result;
}

