describe('Shuffle Sort', function () {
  it('is a function', function () {
    expect(typeof shuffleSort).toEqual('function');
  });

  describe('uses a helper function called swap', function () {
    it('which swaps two elements in an array in-place', function () {
      var array = [1, 2, 3];
      swap(array, 0, 2);
      expect(array[0]).toEqual(3);
      expect(array[1]).toEqual(2);
      expect(array[2]).toEqual(1);
    });
  });

  it('takes an array and returns the same array sorted', function () {

    function checkSorted(array) {
      for (var i = 1; i < array.length; i++) {
        if(array[i] < array[i - 1]) {
          return false;
        }
      }
      return true;
    }

    var array1 = [7,3,2,9,-2,3,7];
    var sorted1 = shuffleSort(array1);
    expect(sorted1).toEqual(array1);
    expect(checkSorted(sorted1)).toEqual(true);

    var array2 = [0,0,0,-2,5,3,7,100,200,3,-5];
    var sorted2 = shuffleSort(array2);
    expect(sorted2).toEqual(array2);
    expect(checkSorted(sorted2)).toEqual(true);

    var array3 = [];
    var sorted3 = shuffleSort(array3);
    expect(sorted3).toEqual(array3);
    expect(checkSorted(sorted3)).toEqual(true);
  });
});