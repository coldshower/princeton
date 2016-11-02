function shuffleSort (arr) {
	for (var i = 0; i < arr.length; i++) {
		var random = Math.floor(Math.random() * (i + 1));
    swap(arr, i, random);
	}
	return arr;
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

// This sort has useful applications in quickSort, wehre randomizing the
// array's elements can protect against bad pivot placements.