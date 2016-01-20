
process.env.COVERAGE ? require('../coverage/lib.js') : require('../src/lib.js');

var should = require('should');
should.config.checkProtoEql = true;

function beTrue(result) {
  should(result).be.true();
}

function beFalse(result) {
  should(result).be.false();
}

describe('Array', function() {
  it('.prototype.first', function() {
    should([1]).have.property('first');
    should([1].first).be.a.Number;
    should(["a"].first).be.a.String;
    should([function(){}].first).be.a.Function;
    should([null].first).be.a.Null;

    should([]).have.property('first');
    should([].first).be.a.Undefined;

    should([5, 2].first).equal(5);
    should(["F", 2].first).equal("F");
    should([9.4, 2].first).equal(9.4);
    should([false, 2].first).false();
  });

  it('.prototype.second', function() {
    should([1, 2]).have.property('second');
    should([1, 2].second).be.a.Number;
    should(["a", "b"].second).be.a.String;
    should([function(){}, function(){}].second).be.a.Function;
    should([null, null].second).be.a.Null;

    should([]).have.property('second');
    should([2]).have.property('second');
    should([].second).be.a.Undefined;
    should([2].second).be.a.Undefined;

    should([5, 2].second).equal(2);
    should(["F", "R"].second).equal("R");
    should([9.4, 12.5].second).equal(12.5);
    should([false, true].second).be.true();
  });

  it('.prototype.last', function() {
    should([1, 2]).have.property('last');
    should([1, 2].last).be.a.Number;
    should(["a", "b"].last).be.a.String;
    should([function(){}, function(){}].last).be.a.Function;
    should([null, null].last).be.a.Null;

    should([]).have.property('last');
    should([1].last).be.a.Number;

    should([5, 2].last).equal(2);
    should(["F", "R"].last).equal("R");
    should([9.4, 12.5].last).equal(12.5);
    should([false, true].last).be.true();
  });

  it('.prototype.clean()', function() {
    should([]).have.property('clean');
    should(["a", "b"]).have.property('clean');
    should([].clean).should.be.Function;

    var test = [1, "b", 3.14, null, {}, function(){}];
    should(test).have
  });

  it('.prototype.includes()', function() {
    should([]).have.property('includes');
    should(["a", "b"]).have.property('includes');
    should([].includes).should.be.Function;

    var result = ["a", "b"].includes("a");
    should(result).be.a.Boolean;
    beTrue(result);

    result = ['a', 'b'].includes('b');
    beTrue(result);

    result = ['a', 'b'].includes(['a']);
    beTrue(result);

    result = ['a', 'b', 'c'].includes(['a', 'b', 'c']);
    beTrue(result);

    result = ['a'].includes('b');
    beFalse(result);

    result = [].includes('c');
    beFalse(result);

    result = [].includes(['a', 1]);
    beFalse(result);
  });

  it('.prototype.every()', function() {
    should([]).have.property('every');
    should([].every).should.be.Function;

    should.throws(function(){ [].every() });
    should.throws(function(){ [].every(1) });
    should.throws(function(){ [].every("") });
    should.throws(function(){ [].every(null) });
    should.throws(function(){ [].every({}) });
    should.throws(function(){ [].every(true) });
    should.throws(function(){ [].every(false) });
    should.doesNotThrow(function(){ [].every(function(){}) });

    should([].every(function(){})).be.equal(true);
    should([1].every(function(){return false})).be.equal(false);
    should([1].every(function(){return true})).be.equal(true);

    should([1, 2, 3].every(function(){return false})).be.equal(false);
    should([1, 2, 3].every(function(){return true})).be.equal(true);

    should([1, 2, 3].every(function(e){ return e > 0 })).be.equal(true);
    should([1, 2, 3].every(function(e){ return e < 0 })).be.equal(false);
  });
});
