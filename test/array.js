
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
  describe('.prototype', function() {
    describe('.first', function() {
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
        var array = [1, 2, 3];

        array.first = 10;
        should(array.first).be.equal(10);
        should(array[0]).be.equal(10);

        array.first = undefined;
        should(array.first).be.equal(undefined);
        should(array[0]).be.equal(undefined);
      });

      it('create value', function(){
        var array = [];

        array.first = 2;
        should(array[0]).equal(2);
        should(array.length).equal(1);
      });
    });

    describe('.second', function() {
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
        var array = [1, 2, 3];

        array.second = 10;
        should(array.second).be.equal(10);
        should(array[1]).be.equal(10);

        array.second = undefined;
        should(array[1]).be.equal(undefined)
      });

      it('create value', function(){
        var array = [];

        array.second = 5;
        should(array[0]).equal(undefined);
        should(array[1]).equal(5);
        should(array.length).equal(2);
      });
    });

    describe('.last', function() {
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
        var array = [1, 2, 3];

        array.last = 10;
        should(array.last).be.equal(10);
        should(array[2]).be.equal(10);

        array.last = undefined;
        should(array.last).be.equal(undefined);
        should(array[2]).be.equal(undefined);
      });

      it('not create value', function(){
        var array = [];
        should(array.last).equal(undefined);

        array.last = 123;
        should(array.last).equal(undefined);
        should(array[0]).equal(undefined);
        should(array.length).equal(0);
      });
    });

    describe('.clean()', function() {
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

      it('not remove objects', function(){
        should.doesNotThrow(function(){
          test.clean({}); // Objects not equal
        });
        should(test.length).be.equal(2);
        should(test[2]).be.Object;
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

    describe('.contains()', function() {

      it('property exists', function(){
          should([]).have.property('contains');
          should(["a", "b"]).have.property('contains');
          should([].contains).should.be.Function;
      });
      it('check return value', function(){
        var result = ["a", "b"].contains("a");
        should(result).be.a.Boolean;
        beTrue(result);
      });
      it('single value check', function(){
        result = ['a', 'b'].contains('b');
        beTrue(result);

        result = ['a', 'b'].contains(['a']);
        beTrue(result);
      });
      it('multi value check', function(){
        result = ['a', 'b', 'c'].contains(['a', 'b', 'c']);
        beTrue(result);
      });
      it('false check', function(){
        result = ['a'].contains('b');
        beFalse(result);

        result = [].contains('c');
        beFalse(result);

        result = [].contains(['a', 1]);
        beFalse(result);
      });
    });


    describe('.clone()', function(){
      it('property exists', function(){
        should([]).have.property('clone');
        should([].clone).should.be.Function;
      });

      it('single item', function(){
        var origin = [1];
        var copy = origin.clone();

        should(copy[0]).equal(1);
        should(copy.length).equal(origin.length);
        should(copy[0]).equal(origin[0]);
      });

      it('many items', function(){
        var origin = [1, 2, 3];
        var copy = origin.clone();

        should(copy[0]).equal(1);
        should(copy[1]).equal(2);
        should(copy[2]).equal(3);
        should(copy.length).equal(origin.length);
        should(copy[0]).equal(origin[0]);
        should(copy[1]).equal(origin[1]);
        should(copy[2]).equal(origin[2]);
      });

      it('many objects', function(){
        var origin = [{}, {}, {}];
        var copy = origin.clone();

        should(copy.length).equal(origin.length);
        should(copy[0]).equal(origin[0]);
        should(copy[1]).equal(origin[1]);
        should(copy[2]).equal(origin[2]);
      });

      it('array of arrays', function(){
        var origin = [[1], [2, 2], [3, 3, [3, 3, 3]]];
        var copy = origin.clone();

        should(copy[0][0]).equal(1);
        should(copy[1][1]).equal(2);
        should(copy[2][2][2]).equal(3);

        should(copy.length).equal(origin.length);
        should(copy[0]).equal(origin[0]);
        should(copy[1]).equal(origin[1]);
        should(copy[2]).equal(origin[2]);
      });
    });
  });

  describe('.empty()', function() {
    it('property exists', function() {
      should(Array).have.property('empty');
      should(Array.empty).be.a.Function;
    });

    it('throws on non array', function() {
      should.throws(function() { Array.empty(); });
      should.throws(function() { Array.empty(1); });
      should.throws(function() { Array.empty(""); });
      should.throws(function() { Array.empty(null); });
      should.throws(function() { Array.empty(function(){}); });
      should.throws(function() { Array.empty({}); });

      should.doesNotThrow(function() { Array.empty([]); });
    });

    it('check empty array', function() {
      should(Array.empty([])).be.equal(true);
      should(Array.empty(new Array())).be.equal(true);
    });

    it('check nonempty array', function() {
      should(Array.empty([1])).be.equal(false);
      should(Array.empty([1, 2, 3])).be.equal(false);
    });
  });

  describe('.present()', function() {
    it('property exists', function() {
      should(Array).have.property('present');
      should(Array.present).be.a.Function;
    });

    it('throws on non array', function() {
      should.throws(function() { Array.present(); });
      should.throws(function() { Array.present(1); });
      should.throws(function() { Array.present(""); });
      should.throws(function() { Array.present(null); });
      should.throws(function() { Array.present(function(){}); });
      should.throws(function() { Array.present({}); });

      should.doesNotThrow(function() { Array.present([]); });
    });

    it('check empty array', function() {
      should(Array.present([])).be.equal(false);
      should(Array.present(new Array())).be.equal(false);
    });

    it('check nonempty array', function() {
      should(Array.present([1])).be.equal(true);
      should(Array.present([1, 2, 3])).be.equal(true);
    });
  });
});
