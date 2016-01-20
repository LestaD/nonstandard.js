

if (typeof [1]['first'] === 'undefined') {
  Object.defineProperty(Array.prototype, 'first', {
    enumerable: false,
    configurable: false,
    get: function () {
      return this[0];
    },
    set: function (value) {
      this[0] = value;
      return value;
    }
  });
}


if (typeof [1, 2]['second'] === 'undefined') {
  Object.defineProperty(Array.prototype, 'second', {
    enumerable: false,
    configurable: false,
    get: function () {
      return this[1];
    },
    set: function (value) {
      this[1] = value;
      return value;
    }
  });
}


if (typeof [1]['last'] === 'undefined') {
  Object.defineProperty(Array.prototype, 'last', {
    enumerable: false,
    configurable: false,
    get: function () {
      return this[this.length - 1];
    },
    set: function (value) {
      this[this.length - 1] = value;
      return value;
    }
  });
}


if (typeof Array.prototype.clean === 'undefined') {
  Object.defineProperty(Array.prototype, 'clean', {
    enumerable: false,
    configurable: false,
    value: function (deleteValue) {
      for (var foundId = 0; foundId < this.length; foundId++) {
        if (this[foundId] === deleteValue || (typeof deleteValue === 'function' && deleteValue(this[foundId]))) {
          this.splice(foundId, 1);
          foundId--;
        }
      }
      return this;
    }
  });
}

if (typeof Array.prototype.every === 'undefined') {
  Object.defineProperty(Array.prototype, 'every', {
    enumerable: false,
    configurable: false,
    value: function(callbackfn, thisArg) {
      'use strict';
      var T, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);
      var len = O.length >>> 0;

      if (typeof callbackfn !== 'function') {
        throw new TypeError();
      }

      if (arguments.length > 1) {
        T = thisArg;
      }

      k = 0;
      while (k < len) {
        var kValue;

        if (k in O) {
          kValue = O[k];
          var testResult = callbackfn.call(T, kValue, k, O);
          if (!testResult) {
            return false;
          }
        }
        k++;
      }
      return true;
    }
  });
}


if (typeof Array.prototype.includes === 'undefined') {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    configurable: false,
    value: function (searchElements) {
      var that = this;

      if (!Array.isArray(searchElements)) {
        searchElements = [searchElements];
      }
      return searchElements.every(function(element){
        return that.indexOf(element) > -1;
      });
    }
  });
}


if (typeof Array.prototype.clone === 'undefined') {
  Object.defineProperty(Array.prototype, 'clone', {
    enumerable: false,
    configurable: false,
    value: function () {
      return this.slice(0);
    }
  });
}


if (typeof Object.clone === 'undefined') {
  Object.defineProperty(Object, 'clone', {
    enumerable: false,
    configurable: false,
    value: function (target) {
      var newObj = {};
      var keys = Object.keys(target);

      for (var index in keys) {
        var key = keys[index];

        if (Array.isArray(target[key])) {
          newObj[key] = target[key].clone();
        }
        else if (typeof target[key] === 'object') {
          newObj[key] = Object.clone(target[key]);
        }
        else {
          newObj[key] = target[key];
        }
      }
      return newObj;
    }
  });
}


if (typeof Number.range === 'undefined') {
  Object.defineProperty(Number, 'range', {
    enumerable: false,
    configurable: false,
    value: function (min, max, step) {
      if (typeof step === 'undefined') step = 1;
      var values = [];

      for (var i = min; i <= max; i += step) {
        values.push(i);
      }

      return values;
    }
  });
}

if (typeof Number.prototype.times === 'undefined') {
  Object.defineProperty(Number.prototype, 'times', {
    enumerable: false,
    configurable: false,
    value: function (callback) {
      if (typeof callback !== 'function') throw new Error('Parameter `callback` must be Function!');

      var result = [];
      var iterates = Number(this);
      for (var i = 0; i < iterates; i++) {
        result.push(callback(i + 0));
      }
      return result;
    }
  });
}


(function(){
  var definePipe = function(target, name) {
    if (!('pipe' in target)) {
      Object.defineProperty(target[name], 'pipe', {
        enumerable: false,
        configurable: false,
        value: function() {
          var caller = target[name];
          caller.apply(target, arguments);
          return arguments[0];
        }
      });
    }
  }

  if (typeof global !== 'undefined' && global.console) {
    definePipe(global.console, 'error');
    definePipe(global.console, 'warn');
    definePipe(global.console, 'info');
    definePipe(global.console, 'log');

    if (!('pipe' in global.console)) {
      Object.defineProperty(global.console, 'pipe', {
        enumerable: false,
        configurable: false,
        value: function() {
          global.console.log.apply(global.console, arguments);
          return arguments[0];
        }
      });
    }
  }

  if (typeof window !== 'undefined' && window.console) {
    definePipe(window.console, 'error');
    definePipe(window.console, 'warn');
    definePipe(window.console, 'info');
    definePipe(window.console, 'log');

    if (!('pipe' in window.console)) {
      Object.defineProperty(window.console, 'pipe', {
        enumerable: false,
        configurable: false,
        value: function() {
          window.console.log.apply(window.console, arguments);
          return arguments[0];
        }
      });
    }
  }
})();




