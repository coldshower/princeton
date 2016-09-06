function shuffleSort (arr) {
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i];
		var random = Math.floor(Math.random() * (i + 1));
		arr[i] = arr[random];
		arr[random] = temp;
	}
	return arr;
}