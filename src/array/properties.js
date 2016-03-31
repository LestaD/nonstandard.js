var T = require('../tools');

module.exports.Install = function Install() {
  T.defineProperty(Array.prototype, 'first',
    function() {
      return this[0];
    },
    function(value) {
      this[0] = value;
      return value;
    }
  );


  T.defineProperty(Array.prototype, 'second',
    function() {
      return this[1];
    },
    function(value) {
      this[1] = value;
      return value;
    }
  );


  T.defineProperty(Array.prototype, 'last',
    function() {
      if (this.length === 0) return undefined;
      return this[this.length - 1];
    },
    function(value) {
      if (this.length > 0) {
        this[this.length - 1] = value;
        return value;
      }
      return undefined;
    }
  );
}