var array = [];
for (var i = 0; i < 10; i++) {
	array.push(i);
}


function find (i, j) {
	return array[i] === array[j];
}

function connect (i, j) {
	var iid = array[i]; // need to declare first or you will be working with changing values
	var jid = array[j];
	for (var k = 0; k < array.length; k++) {
		if (array[k] === iid) {
			array[k] = jid;
		}
	}
}