var path = process.env.COVERAGE ? '../coverage/lib.js' : '../src/lib.js';

var lib = require(path);
var should = require('should');


console.log(Number.range(1,10));
console.log(Number.rangeOut(2, 8, 2));
