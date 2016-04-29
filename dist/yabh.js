(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('yabh', factory) :
  (global.BinaryHeap = factory());
}(this, function () { 'use strict';

  /**
   * @method bubbleUp
   * @param {array} heap The heap.
   * @param {function} weightFunc The weight function.
   * @param {number} n The index of the element to bubble up.
   */
  var bubbleUp = function bubbleUp(heap, weightFunc, n) {
    var element = heap[n];
    var weight = weightFunc(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = Math.floor((n + 1) / 2) - 1;
      var parent = heap[parentN];
      // If the parent has a lesser weight, things are in order and we
      // are done.
      if (weight >= weightFunc(parent)) {
        break;
      } else {
        heap[parentN] = element;
        heap[n] = parent;
        n = parentN;
      }
    }
  };

  /**
   * @method bubbleDown
   * @param {array} heap The heap.
   * @param {function} weightFunc The weight function.
   * @param {number} n The index of the element to sink down.
   */
  var bubbleDown = function bubbleDown(heap, weightFunc, n) {
    var length = heap.length;
    var node = heap[n];
    var nodeWeight = weightFunc(node);

    while (true) {
      var child2N = (n + 1) * 2;
      var child1N = child2N - 1;
      var swap = null;
      if (child1N < length) {
        var child1 = heap[child1N];
        var child1Weight = weightFunc(child1);
        // If the score is less than our node's, we need to swap.
        if (child1Weight < nodeWeight) {
          swap = child1N;
        }
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = heap[child2N];
        var child2Weight = weightFunc(child2);
        if (child2Weight < (swap === null ? nodeWeight : weightFunc(heap[child1N]))) {
          swap = child2N;
        }
      }

      if (swap === null) {
        break;
      } else {
        heap[n] = heap[swap];
        heap[swap] = node;
        n = swap;
      }
    }
  };

  function BinaryHeap(weightFunc, compareFunc) {
    if (!weightFunc) {
      weightFunc = function weightFunc(x) {
        return x;
      };
    }
    if (!compareFunc) {
      compareFunc = function compareFunc(x, y) {
        return x === y;
      };
    }
    if (typeof weightFunc !== 'function') {
      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');
    }
    if (typeof compareFunc !== 'function') {
      throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');
    }
    this.weightFunc = weightFunc;
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  var BHProto = BinaryHeap.prototype;

  BHProto.push = function (node) {
    this.heap.push(node);
    bubbleUp(this.heap, this.weightFunc, this.heap.length - 1);
  };

  BHProto.peek = function () {
    return this.heap[0];
  };

  BHProto.pop = function () {
    var front = this.heap[0];
    var end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      bubbleDown(this.heap, this.weightFunc, 0);
    }
    return front;
  };

  BHProto.remove = function (node) {
    var length = this.heap.length;
    for (var i = 0; i < length; i++) {
      if (this.compareFunc(this.heap[i], node)) {
        var removed = this.heap[i];
        var end = this.heap.pop();
        if (i !== length - 1) {
          this.heap[i] = end;
          bubbleUp(this.heap, this.weightFunc, i);
          bubbleDown(this.heap, this.weightFunc, i);
        }
        return removed;
      }
    }
    return null;
  };

  BHProto.removeAll = function () {
    this.heap = [];
  };

  BHProto.size = function () {
    return this.heap.length;
  };

  return BinaryHeap;

}));
//# sourceMappingURL=yabh.js.map