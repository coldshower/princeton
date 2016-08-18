var arr = [];
var size = [];

for (var i = 0; i < 10; i++) {
	arr.push(i);
	size.push(1);
}

function union (i, j) {
	var rootI = findRoot(i),
		rootj = findRoot(j);

	if (size[rootI] > size[rootJ]) {
		arr[rootI] = arr[rootJ];
		size[rootJ] += size[rootI];
	} else {
		arr[rootJ] = arr[rootI];
		size[rootI] += size[rootJ];
	}
}


function findRoot (i) {
	return (i === arr[i])? i : arr[i] = findRoot(arr[i]);
}

function connected (i, j) {
	return findRoot(i) === findRoot(j);
}