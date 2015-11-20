

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


if (![].clean) {
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


if (![].includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    configurable: false,
    value: function (searchElements) {
      if (searchElements instanceof String) {
        searchElements = [searchElements];
      }
      return searchElements.every((element) => this.indexOf(element) > -1);
    }
  });
}


if (![].clone) {
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


if (Number.range) {
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


