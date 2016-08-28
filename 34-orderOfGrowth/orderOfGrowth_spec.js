describe('binarySearch:', function () {
	describe('bsFind', function () {
		it('is a function', function () {
			expect(typeof bsFind).toEqual('function');
		});

		it('returns the index of the given value in the given sorted array', function () {
			var array = [1,3,5,6];
			expect(bsFind(1, array)).toEqual(0);
			expect(bsFind(3, array)).toEqual(1);
			expect(bsFind(5, array)).toEqual(2);
		});

		
	});
});