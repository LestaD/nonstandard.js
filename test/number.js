var path = process.env.COVERAGE ? '../coverage/lib.js' : '../src/lib.js';

var lib = require(path);
var should = require('should');


describe('Number', function() {
  describe('.range()', function() {
    it('property exists', function() {
      should(Number).have.a.property('range');
      should(Number.range).be.a.Function;
    });

    it('throw on not numbers', function() {
      should.throws(function() { Number.range(""); });
      should.throws(function() { Number.range("", true); });
      should.throws(function() { Number.range("", true, []); });
      should.throws(function() { Number.range([], true, []); });
    });

    it('throw on incorrect call', function() {
      should.throws(function() { Number.range(); });
      should.throws(function() { Number.range(1); });
    });

    it('throw on negative step', function() {
      should.throws(function() { Number.range(1, 2, -1); });
    });

    it('throw on incorrect min/max', function() {
      should.throws(function() { Number.range(5, 1); });
    });

    it('generate simple range', function() {
      var rg = Number.range(1, 3);
      should(rg).be.a.Array;
      should(rg.length).be.equal(3);
      should(rg[0]).be.equal(1);
      should(rg[1]).be.equal(2);
      should(rg[2]).be.equal(3);
    });

    it('generate step range', function() {
      var rg = Number.range(2, 6, 2);
      should(rg).be.a.Array;
      should(rg.length).be.equal(3);
      should(rg[0]).be.equal(2);
      should(rg[1]).be.equal(4);
      should(rg[2]).be.equal(6);
    });

    it('generate step negative range', function() {
      var rg = Number.range(-6, 6, 2);
      should(rg).be.a.Array;
      should(rg.length).be.equal(7);
      should(rg[0]).be.equal(-6);
      should(rg[1]).be.equal(-4);
      should(rg[2]).be.equal(-2);
      should(rg[3]).be.equal(0);
      should(rg[4]).be.equal(2);
      should(rg[5]).be.equal(4);
      should(rg[6]).be.equal(6);
    });

    it('generate full negative range', function() {
      var rg = Number.range(-4, -2);
      should(rg).be.a.Array;
      should(rg.length).be.equal(3);
      should(rg[0]).be.equal(-4);
      should(rg[1]).be.equal(-3);
      should(rg[2]).be.equal(-2);
    });

  });
});