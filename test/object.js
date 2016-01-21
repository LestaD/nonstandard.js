var path = process.env.COVERAGE ? '../coverage/lib.js' : '../src/lib.js';

var lib = require(path);
var should = require('should');


describe('Object', function() {
  describe('.clone()', function() {
    it('property exists', function() {
      should(Object).have.property('clone');
      should(Object.clone).be.a.Function;
    });

    it('copy empty object', function() {
      var original = {};
      var copied = Object.clone(original);

      should(Object.keys(copied).length).be.equal(0);
    });

    it('throw on non object', function() {
      should.throws(function() { Object.clone(); });
      should.throws(function() { Object.clone(1); });
      should.throws(function() { Object.clone(""); });
      should.throws(function() { Object.clone(null); });
      should.throws(function() { Object.clone(function(){}); });

      should.doesNotThrow(function() { Object.clone([]); });
    });

    it('clone one level object', function() {
      var original = { a: "1", b: 2, c: function(){} };
      var copy = null;

      should.doesNotThrow(function(){ copy = Object.clone(original); });
      should(copy).not.be.equal(original);
      should(Object.keys(copy).length).equal(Object.keys(original).length);
      should(copy.a).be.equal("1");
      should(copy.b).be.equal(2);
      should(copy.c).be.equal(original.c);
    });

    it('clone multilevel object', function() {
      var orig = { a: 1, b: { c: 2, d: { e: function(){} } } };
      var copy = null;

      should.doesNotThrow(function() { copy = Object.clone(orig); });
      should(copy).not.be.equal(orig);
      should(Object.keys(copy).length).equal(Object.keys(orig).length);
      should(copy.a).be.equal(1);
      should(copy.b.c).be.equal(2);
      should(copy.b).not.be.equal(orig.b);
      should(copy.b.d).not.be.equal(orig.b.d);
      should(copy.b.d.e).be.equal(orig.b.d.e);
    });

    it('copy is not link', function() {
      var orig = { a: 1, b: 2, c: 3 };
      var copy = null;

      should.doesNotThrow(function() { copy = Object.clone(orig); });
      should(copy).not.be.equal(orig);
      should(Object.keys(copy).length).equal(Object.keys(orig).length);

      orig.a = 123;
      should(copy.a).not.equal(orig.a);

      orig = null;
      should(copy.b).equal(2);
      should(copy.c).equal(3);
    });
  });
});