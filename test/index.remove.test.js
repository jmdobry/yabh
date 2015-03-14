describe('BinaryHeap#remove(node)', function () {
  it('should remove the item from the heap.', function () {
    var heap = new BinaryHeap();
    var objHeap = new BinaryHeap(function (x) {
      return x.value;
    });
    var nums = [20, 4, 33, 1, 0, 34, 22, 31, 32, 5, 6, 7];
    var items = nums.map(function (num) {
      return { value: num };
    });
    items.forEach(function (item) {
      heap.push(item.value);
      objHeap.push(item);
    });

    assert.deepEqual(heap.remove(0), 0);
    assert.deepEqual(objHeap.remove(items[4]), { value: 0 });
    assert.deepEqual(heap.peek(), 1);
    assert.deepEqual(objHeap.peek(), { value: 1 });

    assert.deepEqual(heap.remove(1), 1);
    assert.deepEqual(objHeap.remove(items[3]), { value: 1 });
    assert.deepEqual(heap.peek(), 4);
    assert.deepEqual(objHeap.peek(), { value: 4 });

    assert.deepEqual(heap.remove(4), 4);
    assert.deepEqual(objHeap.remove(items[1]), { value: 4 });
    assert.deepEqual(heap.peek(), 5);
    assert.deepEqual(objHeap.peek(), { value: 5 });

    assert.deepEqual(heap.remove(5), 5);
    assert.deepEqual(objHeap.remove(items[9]), { value: 5 });
    assert.deepEqual(heap.peek(), 6);
    assert.deepEqual(objHeap.peek(), { value: 6 });

    assert.deepEqual(heap.remove(6), 6);
    assert.deepEqual(objHeap.remove(items[10]), { value: 6 });
    assert.deepEqual(heap.peek(), 7);
    assert.deepEqual(objHeap.peek(), { value: 7 });

    assert.deepEqual(heap.remove(7), 7);
    assert.deepEqual(objHeap.remove(items[11]), { value: 7 });
    assert.deepEqual(heap.peek(), 20);
    assert.deepEqual(objHeap.peek(), { value: 20 });

    assert.deepEqual(heap.remove(20), 20);
    assert.deepEqual(objHeap.remove(items[0]), { value: 20 });
    assert.deepEqual(heap.peek(), 22);
    assert.deepEqual(objHeap.peek(), { value: 22 });

    assert.deepEqual(heap.remove(22), 22);
    assert.deepEqual(objHeap.remove(items[6]), { value: 22 });
    assert.deepEqual(heap.peek(), 31);
    assert.deepEqual(objHeap.peek(), { value: 31 });

    assert.deepEqual(heap.remove(31), 31);
    assert.deepEqual(objHeap.remove(items[7]), { value: 31 });
    assert.deepEqual(heap.peek(), 32);
    assert.deepEqual(objHeap.peek(), { value: 32 });

    assert.deepEqual(heap.remove(32), 32);
    assert.deepEqual(objHeap.remove(items[8]), { value: 32 });
    assert.deepEqual(heap.peek(), 33);
    assert.deepEqual(objHeap.peek(), { value: 33 });

    assert.deepEqual(heap.remove(33), 33);
    assert.deepEqual(objHeap.remove(items[2]), { value: 33 });
    assert.deepEqual(heap.peek(), 34);
    assert.deepEqual(objHeap.peek(), { value: 34 });

    assert.deepEqual(heap.remove(34), 34);
    assert.deepEqual(objHeap.remove(items[5]), { value: 34 });
    assert.deepEqual(heap.peek());
    assert.isUndefined(objHeap.peek());
  });
});
