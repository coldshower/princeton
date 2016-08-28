describe('quickUnionWeighted:', function () {
	it('is an object', function () {
		expect(typeof quickUnionWeighted).toEqual('object');
	});

	it('should have an "initialize", connected", "findRoot", and "union" method', function () {
		expect(typeof quickUnionWeighted.initialize).toEqual('function');
		expect(typeof quickUnionWeighted.connected).toEqual('function');
		expect(typeof quickUnionWeighted.union).toEqual('function');
		expect(typeof quickUnionWeighted.findRoot).toEqual('function');
	});

	describe('- initialize', function () {
		it('creates an array with elements matching its index', function () {
			quickUnionWeighted.initialize(20);
			expect(quickUnionWeighted.arr.length).toEqual(20);
			expect(quickUnionWeighted.arr[10]).toEqual(10);
			expect(quickUnionWeighted.arr[0]).toEqual(0);
		});

		it('creates a size array to keep track of the size of each component', function () {
			quickUnionWeighted.initialize(10);
			expect(quickUnionWeighted.size.length).toEqual(10);
			expect(quickUnionWeighted.size[0]).toEqual(1);
			expect(quickUnionWeighted.size[5]).toEqual(1);
		});
	});

	describe('- connected', function () {
		
		beforeEach(function () {
			quickUnionWeighted.initialize(10);
		});
		
		it('returns false if the two parameters are not connected', function () {
			expect(quickUnionWeighted.connected(1, 2)).toEqual(false);
			expect(quickUnionWeighted.connected(3, 4)).toEqual(false);
			expect(quickUnionWeighted.connected(2, 0)).toEqual(false);
		});

		it('returns true if the two parameters are connected by having the same root', function () {
			var array = quickUnionWeighted.arr; // pass by reference
			array[1] = array[2];
			array[3] = array[4];
			array[2] = array[3];
			expect(array[4]).toEqual(4);
			expect(quickUnionLazy.findRoot(1, array)).toEqual(array[4]);
			expect(array[1]).not.toEqual(array[2]);
			expect(quickUnionLazy.connected(1, 3, array)).toBe(true);
		});

	});

	describe('- union', function () {

		beforeEach(function () {
			quickUnionWeighted.initialize(10);
		});
		
		it('should take in arguments as indexes and connect the elements at those indexes', function () {
			var array = quickUnionWeighted.arr;
			quickUnionWeighted.union(1, 2);
			expect(array[1]).toEqual(array[2]);
		});

		it('returns true if the two parameters have the same root', function () {
			expect(quickUnionWeighted.arr[4]).toEqual(4);
			quickUnionWeighted.union(2, 4);
			quickUnionWeighted.union(1, 4);
			expect(quickUnionWeighted.findRoot(1)).toEqual(4);
		});

		it('should connect in a tree-like fashion', function () {
			quickUnionWeighted.union(1, 2);
			quickUnionWeighted.union(6, 9);
			quickUnionWeighted.union(9, 1);
			expect(quickUnionWeighted.connected(6, 2)).toBe(true);
			expect(quickUnionWeighted.connected(2, 9)).toBe(true);
			expect(quickUnionWeighted.connected(6, 9)).toBe(true);
		});

		it('should connect in a way so that smaller trees are connected to the larger tree\'s root.', function () {
			var array = quickUnionWeighted.arr;

			quickUnionWeighted.union(1, 2);
			quickUnionWeighted.union(3, 4);
			quickUnionWeighted.union(9, 1);
			quickUnionWeighted.union(1, 3);
			expect(array[9]).not.toEqual(1);
			expect(array[9]).toEqual(2);
			expect(quickUnionWeighted.connected(1, 9)).toBe(true);
		});

		it('should increase the size of the root node correctly.', function () {
			var array = quickUnionWeighted.arr;

			quickUnionWeighted.union(1, 2);
			expect(quickUnionWeighted.size[2]).toEqual(2);
			quickUnionWeighted.union(9, 1);
			expect(quickUnionWeighted.size[2]).toEqual(3);
		});
	});
});