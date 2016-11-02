describe('QuickSort:', function () {
	it('has randomShuffle, swap, partition, and quicksort functions', function () {
		expect(typeof randomShuffle).toEqual('function');
		expect(typeof swap).toEqual('function');
		expect(typeof partition).toEqual('function');
		expect(typeof quickSort).toEqual('function');
	});

	describe('swap', function () {
		it('takes an array and swaps the values at the two given indices', function () {
			var array = [1, 2, 3, 4];
			swap(array, 0, 2);
			expect(array[0]).toEqual(3);
			expect(array[2]).toEqual(1);
		});
	});

	describe('partition', function () {
		var array;

		beforeEach(function () {
			array = [3, 2, 7, 1, 4];
		});

		it('partitions an array using the last element as a pivot, putting elements smaller on its left and elements larger on its right', function () {
			partition(array, 0, array.length - 1);
		});
		it('returns the final index of the pivot', function () {
			expect(partition(array, 0, array.length - 1)).toEqual(3);
		});
		it('has values less than or equal to the pivot to the left', function () {
			partition(array, 0, array.length - 1);
			expect(array[0]).toEqual(3);
			expect(array[1]).toEqual(2);
			expect(array[2]).toEqual(1);
		});
		it('has values greater than the pivot to the right', function () {
			partition(array, 0, array.length - 1);
			expect(array[4]).toEqual(7);
		});
	});

	describe('quicksort', function () {
		function checkSorted(array) {
		  for (var i = 1; i < array.length; i++) {
		    if(array[i] < array[i - 1]) {
		      return false;
		    }
		  }
		  return true;
		}

	  it('takes an array and returns the same array sorted', function () {
	    var array1 = [7,3,2,9,-2,3,7];
	    var sorted1 = quickSort(array1, 0, array1.length - 1);
	    expect(sorted1).toEqual(array1);
	    expect(checkSorted(sorted1)).toEqual(true);

	    var array2 = [0,0,0,-2,5,3,7,100,200,3,-5];
	    var sorted2 = quickSort(array2, 0, array2.length - 1);
	    expect(sorted2).toEqual(array2);
	    expect(checkSorted(sorted2)).toEqual(true);

	    var array3 = [];
	    var sorted3 = quickSort(array3, 0, array3.length - 1);
	    expect(sorted3).toEqual(array3);
	    expect(checkSorted(sorted3)).toEqual(true);
	  });
	});
});