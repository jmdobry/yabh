## yabh [![bower version](https://img.shields.io/bower/v/yabh.svg?style=flat-square)](https://www.npmjs.org/package/yabh) [![npm version](https://img.shields.io/npm/v/yabh.svg?style=flat-square)](https://www.npmjs.org/package/yabh) [![Circle CI](https://img.shields.io/circleci/project/jmdobry/yabh/master.svg?style=flat-square)](https://circleci.com/gh/jmdobry/yabh/tree/master) [![npm downloads](https://img.shields.io/npm/dm/yabh.svg?style=flat-square)](https://www.npmjs.org/package/yabh) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/jmdobry/yabh/blob/master/LICENSE)

Yet another Binary Heap.

__Latest Release:__ [![Latest Release](https://img.shields.io/github/release/jmdobry/yabh.svg?style=flat-square)](https://github.com/jmdobry/yabh/releases)

__Status:__

[![Dependency Status](https://img.shields.io/gemnasium/jmdobry/yabh.svg?style=flat-square)](https://gemnasium.com/jmdobry/yabh) [![Coverage Status](https://img.shields.io/coveralls/jmdobry/yabh/master.svg?style=flat-square)](https://coveralls.io/r/jmdobry/yabh?branch=master) [![Codacy](https://img.shields.io/codacy/2fb5b2126ab9480883548804d729ebf2.svg?style=flat-square)](https://www.codacy.com/public/jasondobry/yabh/dashboard)

__Supported Platforms:__

[![node version](https://img.shields.io/badge/Node-0.10%2B-green.svg?style=flat-square)](https://github.com/jmdobry/yabh) [![browsers](https://img.shields.io/badge/Browser-Chrome%2CFirefox%2CSafari%2COpera%2CIE%209%2B%2CiOS%20Safari%207.1%2B%2CAndroid%20Browser%202.3%2B-green.svg?style=flat-square)](https://github.com/jmdobry/yabh)


### Quick Start
`bower install --save yabh` or `npm install --save yabh`.

```js
import BinaryHeap from 'yabh';
// or
define(['yabh'], function (BinaryHeap) { ... });
// or
var BinaryHeap = require('yabh');
// or
var BinaryHeap = window.BinaryHeap;

var heap = new BinaryHeap();

heap.push(4);
heap.push(2);
heap.push(1);
heap.push(5);
heap.push(3);
heap.peak(); // 1
```

### API

##### `BinaryHeap([weightFunc][, compareFunc])`

```js
var heap = new BinaryHeap();
heap.weightFunc; // function (x) { return x; }
heap.compareFunc; // function (x, y) { return x === y; }
```

```js
var heap = new BinaryHeap(function (x) { return x.value; });
heap.weightFunc; // function (x) { return x.value; }
heap.compareFunc; // function (x, y) { return x === y; }
```
```

```js
var heap = new BinaryHeap(null, function (x, y) { return x == y; });
heap.weightFunc; // function (x) { return x; }
heap.compareFunc; // function (x, y) { return x == y; }
```

##### `BinaryHeap#push(node)` & `BinaryHeap#pop()`

```js
var heap = new BinaryHeap();
heap.push(1);
heap.push(10);
heap.push(4);
heap.push(2);
heap.pop(); // 1
heap.pop(); // 2
heap.pop(); // 4
heap.pop(); // 10
```

##### `BinaryHeap#peak()`

```js
var heap = new BinaryHeap();
heap.push(1);
heap.push(10);
heap.push(4);
heap.push(2);
heap.peek(); // 1
heap.pop(); // 1
heap.peek(); // 2
heap.pop(); // 2
heap.peek(); // 4
heap.pop(); // 4
heap.peek(); // 10
heap.pop(); // 10
```

##### `BinaryHeap#remove(node)`

```js
var heap = new BinaryHeap();
heap.push(1);
heap.push(10);
heap.push(2);
heap.remove(10); // 10
heap.peek(); // 1
heap.remove(1); // 1
heap.peek(); // 2
```

##### `BinaryHeap#removeAll()`

```js
var heap = new BinaryHeap();
heap.push(1);
heap.push(10);
heap.push(2);
heap.removeAll();
heap.size(); // 0
```

##### `BinaryHeap#size()`

```js
var heap = new BinaryHeap();
heap.push(1);
heap.push(10);
heap.push(4);
heap.push(2);
heap.size(); // 4
```

### License

The MIT License (MIT)

Copyright (c) 2015 Jason Dobry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

