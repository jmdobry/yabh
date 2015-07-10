/*!
 * yabh
 * @version 1.1.0 - Homepage <http://jmdobry.github.io/yabh/>
 * @author Jason Dobry <jason.dobry@gmail.com>
 * @copyright (c) 2015 Jason Dobry 
 * @license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>
 * 
 * @overview Yet another Binary Heap.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("yabh", factory);
	else if(typeof exports === 'object')
		exports["BinaryHeap"] = factory();
	else
		root["BinaryHeap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @method bubbleUp
	 * @param {array} heap The heap.
	 * @param {function} weightFunc The weight function.
	 * @param {number} n The index of the element to bubble up.
	 */
	function bubbleUp(heap, weightFunc, n) {
	  var element = heap[n];
	  var weight = weightFunc(element);
	  // When at 0, an element can not go up any further.
	  while (n > 0) {
	    // Compute the parent element's index, and fetch it.
	    var parentN = Math.floor((n + 1) / 2) - 1;
	    var _parent = heap[parentN];
	    // If the parent has a lesser weight, things are in order and we
	    // are done.
	    if (weight >= weightFunc(_parent)) {
	      break;
	    } else {
	      heap[parentN] = element;
	      heap[n] = _parent;
	      n = parentN;
	    }
	  }
	}

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
	    var child2N = (n + 1) * 2,
	        child1N = child2N - 1;
	    var swap = null;
	    if (child1N < length) {
	      var child1 = heap[child1N],
	          child1Weight = weightFunc(child1);
	      // If the score is less than our node's, we need to swap.
	      if (child1Weight < nodeWeight) {
	        swap = child1N;
	      }
	    }
	    // Do the same checks for the other child.
	    if (child2N < length) {
	      var child2 = heap[child2N],
	          child2Weight = weightFunc(child2);
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
	    weightFunc = function (x) {
	      return x;
	    };
	  }
	  if (!compareFunc) {
	    compareFunc = function (x, y) {
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

	module.exports = BinaryHeap;

/***/ }
/******/ ])
});
;