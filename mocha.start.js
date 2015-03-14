/*global assert:true */
'use strict';

var assert = require('chai').assert;
var mocha = require('mocha');
var BinaryHeap = require('./');

var globals = module.exports = {
  BinaryHeap: BinaryHeap,
  assert: assert
};

var test = new mocha();

var testGlobals = [BinaryHeap];

for (var key in globals) {
  global[key] = globals[key];
  testGlobals.push(globals[key]);
}
test.globals(testGlobals);
