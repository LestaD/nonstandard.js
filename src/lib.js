

if (![1]['first']) {
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


if (![1]['second']) {
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


if (![1]['last']) {
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


if (!Array.prototype.clean) {
  Object.defineProperty(Array.prototype, 'clean', {
    enumerable: false,
    configurable: false,
    value: function (deleteValue) {
      for (var foundId = 0; foundId < this.length; foundId++) {
        if (this[foundId] === deleteValue) {
          this.splice(foundId, 1);
          foundId--;
        }
      }
      return this;
    }
  });
}

if (!Array.prototype.every) {
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


if (!Array.prototype.includes) {
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


if (!Array.prototype.clone) {
  Object.defineProperty(Array.prototype, 'clone', {
    enumerable: false,
    configurable: false,
    value: function () {
      return this.slice(0);
    }
  });
}


if (!Object.clone) {
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


if (!Number.range) {
  Object.defineProperty(Number, 'range', {
    enumerable: false,
    configurable: false,
    value: function (min, max, step) {
      if (typeof step === 'undefined') step = 1;
      var current = min - step;

      return {
        [Symbol.iterator]() {
          return {
            next() {
              return {
                done: current >= max,
                value: current >= max ? undefined : current += step
              }
            }
          }
        }
      };
    }
  });
}

if (!Number.rangeInside) {
  Object.defineProperty(Number, 'rangeInside', {
    enumerable: false,
    configurable: false,
    value: function (min, max, step) {
      if (typeof step === 'undefined') step = 1;
      var current = min;

      return {
        [Symbol.iterator]() {
          return {
            next() {
              return {
                done: current >= max - step,
                value: current >= max - step ? undefined : current += step
              }
            }
          }
        }
      };
    }
  });
}

