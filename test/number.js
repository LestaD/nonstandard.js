var path = process.env.COVERAGE ? '../coverage/lib.js' : '../src/lib.js';

var lib = require(path);
var should = require('should');



describe('Number', function() {
  describe('.range()', function() {
    it('property exists', function() {
      should(Number).have.a.property('range');
      should(Number.range).be.a.Function;
    });


  });
});