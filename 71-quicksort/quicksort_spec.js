describe('QuickSort:', function () {
	it('has randomShuffle, swap, partition, and quicksort functions', function () {
		expect(typeof randomShuffle).toEqual('function');
		expect(typeof swap).toEqual('function');
		expect(typeof partition).toEqual('function');
		expect(typeof quicksort).toEqual('function');
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

	});
});