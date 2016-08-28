describe('Iterators:', function () {
	describe('makeIterator', function () {
		var array, iterate;

		beforeEach(function () {
			array = [1,2,3,4];
			iterate = makeIterator(array);
		});

		it('is a function', function () {
			expect(typeof makeIterator).toEqual('function');
		});

		it('takes an array as a argument and returns an object with the method "next"', function () {
			expect(typeof iterate).toEqual('object');
			expect(typeof iterate.next).toEqual('function');
		});

		it('returns an object with a next method that returns the following element', function () {
			expect(iterate.next()).toEqual(1);
			expect(iterate.next()).toEqual(2);
			iterate.next();
			expect(iterate.next()).toEqual(4);
			expect(iterate.next()).toEqual(undefined);
		});
	});
});	