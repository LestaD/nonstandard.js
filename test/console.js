process.env.COVERAGE ? require('../coverage/lib.js') : require('../src/lib.js');

var should = require('should');
should.config.checkProtoEql = true;

function beTrue(result) {
  should(result).be.true();
}

function beFalse(result) {
  should(result).be.false();
}

describe('console', function(){
  it('.pipe()', function(){
    should(console).have.property('pipe');
    should(console.pipe).be.a.Function;

    var one = console.pipe(1);
    var fourfive = console.pipe(4, 5);

    should(one).be.a.Number;
    should(one).equal(1);

    should(fourfive).be.a.Number;
    should(fourfive).equal(4);
  });

  it('.log.pipe()', function(){
    should(console.log).have.property('pipe');
    should(console.log.pipe).be.a.Function;

    var one = console.log.pipe(1);
    var fourfive = console.log.pipe(4, 5);

    should(one).be.a.Number;
    should(one).equal(1);

    should(fourfive).be.a.Number;
    should(fourfive).equal(4);
  });

  it('.error.pipe()', function(){
    should(console.error).have.property('pipe');
    should(console.error.pipe).be.a.Function;

    var one = console.error.pipe(1);
    var fourfive = console.error.pipe(4, 5);

    should(one).be.a.Number;
    should(one).equal(1);

    should(fourfive).be.a.Number;
    should(fourfive).equal(4);
  });

  it('.warn.pipe()', function(){
    should(console.warn).have.property('pipe');
    should(console.warn.pipe).be.a.Function;

    var one = console.warn.pipe(1);
    var fourfive = console.warn.pipe(4, 5);

    should(one).be.a.Number;
    should(one).equal(1);

    should(fourfive).be.a.Number;
    should(fourfive).equal(4);
  });

  it('.info.pipe()', function(){
    should(console.info).have.property('pipe');
    should(console.info.pipe).be.a.Function;

    var one = console.info.pipe(1);
    var fourfive = console.info.pipe(4, 5);

    should(one).be.a.Number;
    should(one).equal(1);

    should(fourfive).be.a.Number;
    should(fourfive).equal(4);
  });
});