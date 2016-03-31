
process.env.COVERAGE ? require('../coverage/lib.js') : require('../src/lib.js');

var should = require('should');
should.config.checkProtoEql = true;


describe('String', function() {
  describe('.random()', function() {
    it('method exists', function() {
      should(String).have.property('random');
      should(String.random).be.a.Function;
    });

    it('not throws on call', function() {
      should(function(){
        String.random()
      }).not.throw();
    });

    it('return 10 symbols by default', function() {
      var rnd = String.random();
      should(rnd).be.a.String();
      should(rnd.length).be.eql(10);
      should(String.random().length).be.eql(10);
      should(String.random().length).be.eql(10);
      should(String.random().length).be.eql(10);
      should(String.random().length).be.eql(10);
    });

    it('return 5 symbols', function() {
      should(String.random(5).length).be.eql(5);
      should(String.random(5).length).be.eql(5);
      should(String.random(5).length).be.eql(5);
      should(String.random(5).length).be.eql(5);
    });

    it('return 12 symbols', function() {
      should(String.random(12).length).be.eql(12);
      should(String.random(12).length).be.eql(12);
      should(String.random(12).length).be.eql(12);
      should(String.random(12).length).be.eql(12);
    });

    it('return 53 symbols', function() {
      should(String.random(53).length).be.eql(53);
      should(String.random(53).length).be.eql(53);
      should(String.random(53).length).be.eql(53);
      should(String.random(53).length).be.eql(53);
    });
  });
});