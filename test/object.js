var path = process.env.COVERAGE ? '../coverage/lib.js' : '../src/lib.js';

var lib = require(path);
var should = require('should');