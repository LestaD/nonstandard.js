
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
  describe('.prototype.first', function() {
    it('exists', function(){
      should([1]).have.property('first');
      should([1].first).be.a.Number;
      should(["a"].first).be.a.String;
      should([function(){}].first).be.a.Function;
      should([null].first).be.a.Null;
      should([]).have.property('first');
      should([].first).be.a.Undefined;
    });

    it('get correct value', function(){
      should([5, 2].first).equal(5);
      should(["F", 2].first).equal("F");
      should([9.4, 2].first).equal(9.4);
      should([false, 2].first).false();
    });

    it('set value', function(){
      should(true).be.equal(false)
    });
  });

  describe('.prototype.second', function() {
    it('exists', function(){
      should([1, 2]).have.property('second');
      should([1, 2].second).be.a.Number;
      should(["a", "b"].second).be.a.String;
      should([function(){}, function(){}].second).be.a.Function;
      should([null, null].second).be.a.Null;

      should([]).have.property('second');
      should([2]).have.property('second');
      should([].second).be.a.Undefined;
      should([2].second).be.a.Undefined;
    });

    it('get correct value', function(){
      should([5, 2].second).equal(2);
      should(["F", "R"].second).equal("R");
      should([9.4, 12.5].second).equal(12.5);
      should([false, true].second).be.true();
    });

    it('set value', function(){
      should(true).be.equal(false)
    });
  });

  describe('.prototype.last', function() {
    it('exists', function(){
      should([1, 2]).have.property('last');
      should([1, 2].last).be.a.Number;
      should(["a", "b"].last).be.a.String;
      should([function(){}, function(){}].last).be.a.Function;
      should([null, null].last).be.a.Null;

      should([]).have.property('last');
      should([1].last).be.a.Number;
    });

    it('get correct value', function(){
      should([5, 2].last).equal(2);
      should(["F", "R"].last).equal("R");
      should([9.4, 12.5].last).equal(12.5);
      should([false, true].last).be.true();
    });

    it('set value', function(){
      should(true).be.equal(false)
    });
  });

  describe('.prototype.clean()', function() {
    it('exists', function(){
      should([]).have.property('clean');
      should(["a", "b"]).have.property('clean');
      should([].clean).should.be.Function;
    });

    var test = [1, "b", 3.14, null, {}, function(){}];

    it('clean nothing', function(){
      should(test).have.property('clean');
      should.doesNotThrow(function(){
        test.clean();
      });
      should(test.length).be.equal(6);
      should(test[0]).be.equal(1);
      should(test[test.length-1]).be.Function;
    });
    it('clean string', function(){
      should.doesNotThrow(function(){
        test.clean("b");
      });
      should(test.length).be.equal(5);
      should(test[1]).be.equal(3.14);
      should(test[test.length-1]).be.Function;
    });
    it('clean null', function(){
      should.doesNotThrow(function(){
        test.clean(null);
      });
      should(test.length).be.equal(4);
      should(test[2]).be.Object;
      should(test[test.length-1]).be.Function;
    });
    it('not remove objects', function(){
      should.doesNotThrow(function(){
        test.clean({}); // Objects not equal
      });
      should(test.length).be.equal(4);
      should(test[2]).be.Object;
      should(test[test.length-1]).be.Function;
    });
    it('clean integer', function(){
      should.doesNotThrow(function(){
        test.clean(1);
      });
      should(test.length).be.equal(3);
      should(test[0]).be.equal(3.14);
      should(test[test.length-1]).be.Function;
    });
    it('clean float', function(){
      should.doesNotThrow(function(){
        test.clean(3.14);
      });
      should(test.length).be.equal(2);
      should(test[0]).be.Object;
      should(test[test.length-1]).be.Function;
    });

    it('clean by callback', function(){
      var test = [1, "b", 3.14, null, {}, function(){}];

      should.doesNotThrow(function(){
        test.clean(function(e){
          return e > 1;
        });
      });
      should(test.length).be.equal(5);
      should(test[2]).be.equal(null);
      should(test[test.length-1]).be.Function;

      should.doesNotThrow(function(){
        test.clean(function(e){
          return typeof e === 'function';
        })
      });
      should(test.length).be.equal(4);
      should(test[3]).be.Object;
      should(test[test.length-1]).be.Object;
    });
  });

  describe('.prototype.includes()', function() {

    it('property exists', function(){
        should([]).have.property('includes');
        should(["a", "b"]).have.property('includes');
        should([].includes).should.be.Function;
    });
    it('check return value', function(){
      var result = ["a", "b"].includes("a");
      should(result).be.a.Boolean;
      beTrue(result);
    });
    it('single value check', function(){
      result = ['a', 'b'].includes('b');
      beTrue(result);

      result = ['a', 'b'].includes(['a']);
      beTrue(result);
    });
    it('multi value check', function(){
      result = ['a', 'b', 'c'].includes(['a', 'b', 'c']);
      beTrue(result);
    });
    it('false check', function(){
      result = ['a'].includes('b');
      beFalse(result);

      result = [].includes('c');
      beFalse(result);

      result = [].includes(['a', 1]);
      beFalse(result);
    });
  });

  describe('.prototype.every()', function() {
    it('property exists', function(){
      should([]).have.property('every');
      should([].every).should.be.Function;
    });
    it('throw if not function', function(){
      should.throws(function(){ [].every() });
      should.throws(function(){ [].every(1) });
      should.throws(function(){ [].every("") });
      should.throws(function(){ [].every(null) });
      should.throws(function(){ [].every({}) });
      should.throws(function(){ [].every(true) });
      should.throws(function(){ [].every(false) });
      should.doesNotThrow(function(){ [].every(function(){}) });
    });
    it('empty array', function(){
      should([].every(function(){})).be.equal(true);
    });
    it('one item', function(){
      should([1].every(function(){return false})).be.equal(false);
      should([1].every(function(){return true})).be.equal(true);
    });
    it('many items', function(){
      should([1, 2, 3].every(function(){return false})).be.equal(false);
      should([1, 2, 3].every(function(){return true})).be.equal(true);

      should([1, 2, 3].every(function(e){ return e > 0 })).be.equal(true);
      should([1, 2, 3].every(function(e){ return e < 0 })).be.equal(false);
    });
  });

  describe('.prototype.clone()', function(){
    it('property exists', function(){
      should([]).have.property('clone');
      should([].clone).should.be.Function;
    });

    it('property exists', function(){});

    it('property exists', function(){});

    it('property exists', function(){});
  });
});
