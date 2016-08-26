describe('Naive Dynamic Arrays:', function () {
	describe('NaiveArray', function () {
		var naive;

		beforeEach(function () {
			naive = new NaiveArray();
		});

		it('is a constructor function', function () {
			expect(typeof NaiveArray).toEqual('function');
		});

		it('starts with a size of 1', function () {
			expect(naive.size).toEqual(1);
			expect(naive.storage.length).toEqual(0);
		});

		it('has instances with the methods "push" and "pop"', function () {
			expect(typeof naive.push).toEqual('function');
			expect(typeof naive.pop).toEqual('function');
		});

		it('increases size by 1 each time something is pushed', function () {
			naive.push(5);
			expect(naive.size).toEqual(2);
			expect(naive.storage.length).toEqual(2);
		});

		it('pushes correctly', function () {
			naive.push(5);
			console.log(naive);
			expect(naive.storage[0]).toEqual(5);
		});

		it('works for multiple pushes', function () {
			naive.push(1);
			naive.push(2);
			naive.push(3);
			naive.push(4);
			naive.push(5);
			naive.push(6);
			expect(naive.storage[5]).toEqual(6);
			expect(naive.size).toEqual(7);
		});

		it('decreases in size by 1 each time something is popped', function () {
			naive.push(1);
			naive.push(2);
			naive.push(3);
			naive.push(4);
			naive.push(5);
			naive.push(6);
			expect(naive.pop()).toEqual(6);
			expect(naive.size).toEqual(6);
		});

		it('does not pop if the array is empty', function () {
			expect(naive.pop()).toEqual(undefined);
			naive.push(1);
			naive.pop();
			expect(naive.pop()).toEqual(undefined);
		});	
	});
});

describe('Improved Dynamic Arrays:', function () {
	describe('DynamicArray', function () {
		var dynamic;

		beforeEach(function () {
			dynamic = new DynamicArray(0);
		});

		it('is a constructor function', function () {
			expect(typeof DynamicArray).toEqual('function');
		});

		it('takes an argument that dictates the size of the array', function () {
			expect(dynamic.size).toEqual(1);
			expect(dynamic.storage.length).toEqual(0);
		});

		it('has instances with the methods "push" and "pop"', function () {
			expect(typeof dynamic.push).toEqual('function');
			expect(typeof dynamic.pop).toEqual('function');
		});
	});
});