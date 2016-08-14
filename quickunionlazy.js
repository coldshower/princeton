var arr = [];

for (var i = 0; i < 10; i++) {
	arr.push(i);
}

function union (i, j) {
	arr[findRoot(i)] = findRoot(j);
}

function findRoot (i) {
	return (i === arr[i])? i : findRoot(arr[i]);
}	

function connected (i, j) {
	return findRoot(i) === findRoot(j);
}