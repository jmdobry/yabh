describe('BinaryHeap([weightFunc][, compareFunc])', function () {
  var TYPES_EXCEPT_FUNCTION = ['string', 123, 123.123, null, undefined, {}, [], true, false];
  it('should create an empty heap with size 0.', function () {
    var heap = new BinaryHeap();
    assert.deepEqual(heap.size(), 0);
  });
  it('should throw an error if "weightFunc" is not a function.', function () {
    var heap;
    for (var i = 0; i < TYPES_EXCEPT_FUNCTION.length; i++) {
      try {
        heap = new BinaryHeap(TYPES_EXCEPT_FUNCTION[i]);
        if (TYPES_EXCEPT_FUNCTION[i]) {
          throw new Error('should have failed!');
        }
      } catch (err) {
        assert.equal(err.message, 'BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
        continue;
      }
      if (TYPES_EXCEPT_FUNCTION[i]) {
        throw new Error('should have failed!');
      }
    }
  });
  it('should throw an error if "compareFunc" is not a function.', function () {
    var heap;
    for (var i = 0; i < TYPES_EXCEPT_FUNCTION.length; i++) {
      try {
        heap = new BinaryHeap(null, TYPES_EXCEPT_FUNCTION[i]);
        if (TYPES_EXCEPT_FUNCTION[i]) {
          throw new Error('should have failed!');
        }
      } catch (err) {
        assert.equal(err.message, 'BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
        continue;
      }
      if (TYPES_EXCEPT_FUNCTION[i]) {
        throw new Error('should have failed!');
      }
    }
  });
});
