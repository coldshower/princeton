describe('quickUnionLazy', function () {
	it('is an object', function () {
		expect(typeof quickUnionLazy).toEqual('object');
	});

	it('should have an "initialize", connected", "findRoot", and "union" method', function () {
		expect(typeof quickUnionLazy.initialize).toEqual('function');
		expect(typeof quickUnionLazy.connected).toEqual('function');
		expect(typeof quickUnionLazy.union).toEqual('function');
		expect(typeof quickUnionLazy.findRoot).toEqual('function');
	});

	describe('- initialize', function () {
		it('returns an array with elements matching its index', function () {
			expect(quickUnionLazy.initialize(20).length).toEqual(20);
			expect(quickUnionLazy.initialize(10)[4]).toEqual(4);
			expect(quickUnionLazy.initialize(10)[7]).toEqual(7);
		});
	});

	describe('- connected', function () {
		var array;
		
		beforeEach(function () {
			array = quickUnionLazy.initialize(10);
		});
		
		it('returns false if the two parameters are not connected', function () {
			expect(quickUnionLazy.connected(1, 2, array)).toEqual(false);
			expect(quickUnionLazy.connected(3, 4, array)).toEqual(false);
			expect(quickUnionLazy.connected(2, 0, array)).toEqual(false);
		});

		it('returns true if the two parameters have the same root', function () {
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
		var array;

		beforeEach(function () {
			array = quickUnionLazy.initialize(10);
		});
		
		it('should take in arguments as indexes and connect the elements at those indexes', function () {
			var oldElem = array[1];
			quickUnionLazy.union(1, 2, array);
			expect(array[1]).not.toEqual(oldElem);
			expect(array[1]).toEqual(array[2]);
		});

		it('should connect in a tree-like fashion', function () {
			quickUnionLazy.union(1, 2, array);
			quickUnionLazy.union(6, 9, array);
			quickUnionLazy.union(9, 1, array);
			expect(quickUnionLazy.connected(6, 2, array)).toBe(true);
			expect(quickUnionLazy.connected(2, 9, array)).toBe(true);
			expect(quickUnionLazy.connected(6, 9, array)).toBe(true);
		});

		it('should connect transitively such that if 1 and 2 are already connected, then connecting 1 to 3 will also connect 2 to 3', function () {
			quickUnionLazy.union(1, 2, array);
			expect(quickUnionLazy.connected(1, 2, array)).toBe(true);
			expect(quickUnionLazy.connected(1, 3, array)).toBe(false);
			quickUnionLazy.union(1, 3, array);
			expect(quickUnionLazy.connected(2, 3, array)).toBe(true);
			expect(quickUnionLazy.connected(1, 3, array)).toBe(true);
		});
	});
});