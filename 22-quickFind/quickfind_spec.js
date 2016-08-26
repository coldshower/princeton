describe('quickFind:', function () {
	it('is an object', function () {
		expect(typeof quickFind).toEqual('object');
	});

	it('should have an "initialize", find", and "connect" method', function () {
		expect(typeof quickFind.initialize).toEqual('function');
		expect(typeof quickFind.find).toEqual('function');
		expect(typeof quickFind.connect).toEqual('function');
	});

	describe('- initialize', function () {
		it('returns an array with elements matching its index', function () {
			expect(quickFind.initialize(20).length).toEqual(20);
			expect(quickFind.initialize(10)[4]).toEqual(4);
			expect(quickFind.initialize(10)[7]).toEqual(7);
		});
	});

	describe('- find', function () {
		var array;
		
		beforeEach(function () {
			array = quickFind.initialize(10);
		});
		
		it('returns false if the two parameters are not connected', function () {
			expect(quickFind.find(1, 2, array)).toEqual(false);
			expect(quickFind.find(3, 4, array)).toEqual(false);
			expect(quickFind.find(2, 0, array)).toEqual(false);
		});
	});

	describe('- connect', function () {
		var array;

		beforeEach(function () {
			array = quickFind.initialize(10);
		});
		
		it('should take in arguments as indexes and connect the elements at those indexes', function () {
			var oldElem = array[1];
			quickFind.connect(1, 2, array);
			expect(array[1]).not.toEqual(oldElem);
			expect(array[1]).toEqual(array[2]);
		});

		it('should connect transitively such that if 1 and 2 are already connected, then connecting 1 to 3 will also connect 2 to 3', function () {
			quickFind.connect(1, 2, array);
			expect(quickFind.find(1, 2, array)).toBe(true);
			expect(quickFind.find(1, 3, array)).toBe(false);
			quickFind.connect(1, 3, array);
			expect(quickFind.find(2, 3, array)).toBe(true);
			expect(quickFind.find(1, 3, array)).toBe(true);
		});
	});
});