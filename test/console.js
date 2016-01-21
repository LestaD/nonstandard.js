process.env.COVERAGE ? require('../coverage/lib.js') : require('../src/lib.js');

var should = require('should');
should.config.checkProtoEql = true;

function beTrue(result) {
  should(result).be.true();
}

function beFalse(result) {
  should(result).be.false();
}

describe('console', function() {
  describe('.pipe()', function() {
    it('property exists', function() {
      should(console).have.property('pipe');
      should(console.pipe).be.a.Function;
    });

    it('first argument returns', function() {
      var one = console.pipe(1);
      var fourfive = console.pipe(4, 5);

      should(one).be.a.Number;
      should(one).equal(1);

      should(fourfive).be.a.Number;
      should(fourfive).equal(4);
    });
  });

  describe('.log.pipe()', function() {
    it('property exists', function() {
      should(console.log).have.property('pipe');
      should(console.log.pipe).be.a.Function;
    });

    it('first argument returns', function() {
      var one = console.log.pipe(1);
      var fourfive = console.log.pipe(4, 5);

      should(one).be.a.Number;
      should(one).equal(1);

      should(fourfive).be.a.Number;
      should(fourfive).equal(4);
    });
  });

  describe('.info.pipe()', function() {
    it('property exists', function() {
      should(console.info).have.property('pipe');
      should(console.info.pipe).be.a.Function;
    });

    it('first argument returns', function() {
      var one = console.info.pipe(1);
      var fourfive = console.info.pipe(4, 5);

      should(one).be.a.Number;
      should(one).equal(1);

      should(fourfive).be.a.Number;
      should(fourfive).equal(4);
    });
  });

  describe('.warn.pipe()', function() {
    it('property exists', function() {
      should(console.warn).have.property('pipe');
      should(console.warn.pipe).be.a.Function;
    });

    it('first argument returns', function() {
      var one = console.warn.pipe(1);
      var fourfive = console.warn.pipe(4, 5);

      should(one).be.a.Number;
      should(one).equal(1);

      should(fourfive).be.a.Number;
      should(fourfive).equal(4);
    });
  });

  describe('.error.pipe()', function() {
    it('property exists', function() {
      should(console.error).have.property('pipe');
      should(console.error.pipe).be.a.Function;
    });

    it('first argument returns', function() {
      var one = console.error.pipe(1);
      var fourfive = console.error.pipe(4, 5);

      should(one).be.a.Number;
      should(one).equal(1);

      should(fourfive).be.a.Number;
      should(fourfive).equal(4);
    });
  });

});