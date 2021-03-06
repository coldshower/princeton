describe('6-2: Bottom Up Merge Sort', function () {

  it('is a function', function () {
    expect(typeof bottomUpMergeSort).toEqual('function');
  });

  function checkSorted(array) {
    for (var i = 1; i < array.length; i++) {
      if(array[i] < array[i - 1]) {
        return false;
      }
    }
    return true;
  }

  describe('uses a helper function, merge,', function () {
    it('to combine two sorted halves of an array in-place', function () {

      var array1 = [5,6,7,1,2];
      var sorted1 = merge(array1, 0, 3, 4); 
      expect(sorted1).toEqual(array1);
      expect(checkSorted(sorted1)).toEqual(true);
    });
  });

  it('takes an array and returns the same array sorted', function () {

    var array1 = [7,3,2,9,-2,3,7];
    var sorted1 = bottomUpMergeSort(array1);
    expect(sorted1).toEqual(array1);
    expect(checkSorted(sorted1)).toEqual(true);

    var array2 = [0,0,0,-2,5,3,7,100,200,3,-5];
    var sorted2 = bottomUpMergeSort(array2);
    expect(sorted2).toEqual(array2);
    expect(checkSorted(sorted2)).toEqual(true);

    var array3 = [];
    var sorted3 = bottomUpMergeSort(array3);
    expect(sorted3).toEqual(array3);
    expect(checkSorted(sorted3)).toEqual(true);
  });
});