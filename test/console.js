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
    should(console.pipe(1)).be.a.Number;
    should(console.pipe(1)).equal(1);

    should(console.pipe(4, 5)).be.a.Number;
    should(console.pipe(4, 5)).equal(4);
  });

  it('.log.pipe()', function(){
    should(console.log).have.property('pipe');
    should(console.log.pipe).be.a.Function;
    should(console.log.pipe(1)).be.a.Number;
    should(console.log.pipe(1)).equal(1);

    should(console.log.pipe(4, 5)).be.a.Number;
    should(console.log.pipe(4, 5)).equal(4);
  });

  it('.error.pipe()', function(){
    should(console.error).have.property('pipe');
    should(console.error.pipe).be.a.Function;
    should(console.error.pipe(1)).be.a.Number;
    should(console.error.pipe(1)).equal(1);

    should(console.error.pipe(4, 5)).be.a.Number;
    should(console.error.pipe(4, 5)).equal(4);
  });

  it('.warn.pipe()', function(){
    should(console.warn).have.property('pipe');
    should(console.warn.pipe).be.a.Function;
    should(console.warn.pipe(1)).be.a.Number;
    should(console.warn.pipe(1)).equal(1);

    should(console.warn.pipe(4, 5)).be.a.Number;
    should(console.warn.pipe(4, 5)).equal(4);
  });

  it('.info.pipe()', function(){
    should(console.info).have.property('pipe');
    should(console.info.pipe).be.a.Function;
    should(console.info.pipe(1)).be.a.Number;
    should(console.info.pipe(1)).equal(1);

    should(console.info.pipe(4, 5)).be.a.Number;
    should(console.info.pipe(4, 5)).equal(4);
  });
});