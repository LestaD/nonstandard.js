
function defineProperty(target, name, getter, setter) {
  if (typeof target[name] !== 'undefined') return;

  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    get: getter,
    set: setter
  });
}

function defineMethod(target, name, method) {
  if (typeof target[name] !== 'undefined') return;

  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    value: method
  });
}



defineProperty(Array.prototype, 'first',
  function() {
    return this[0];
  },
  function(value) {
    this[0] = value;
    return value;
  }
);


defineProperty(Array.prototype, 'second',
  function() {
    return this[1];
  },
  function(value) {
    this[1] = value;
    return value;
  }
);


defineProperty(Array.prototype, 'last',
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


defineMethod(Array.prototype, 'clean', function(deleteValue)
{
  for (var foundId = 0; foundId < this.length; foundId++) {
    if (this[foundId] === deleteValue || (typeof deleteValue === 'function' && deleteValue(this[foundId]))) {
      this.splice(foundId, 1);
      foundId--;
    }
  }
  return this;
});


defineMethod(Array.prototype, 'includes', function(searchElements)
{
  var that = this;

  if (!Array.isArray(searchElements)) {
    searchElements = [searchElements];
  }
  return searchElements.every(function(element){
    return that.indexOf(element) > -1;
  });
});


defineMethod(Array.prototype, 'clone', function()
{
  return this.slice(0);
});


defineMethod(Object, 'clone', function(target)
{
  if (typeof target !== 'object') throw new TypeError('Parameter `target` must be Object!');

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
});


defineMethod(Object, 'empty', function(target)
{
  if (!Array.isArray(target) && typeof target !== 'object') throw new TypeError('Parameter `target` must be Object or Array!');

  if (Array.isArray(target)) {
    return target.length === 0;
  }

  return Object.keys(target).length === 0;
});


defineMethod(Number, 'range', function(min, max, step)
{
  if (typeof min !== 'number'
      || typeof max !== 'number'
      || (typeof step !== 'undefined' && typeof step !== 'number')) {
    throw new TypeError('Arguments for Number.range() must be Number');
  }

  if (typeof step === 'undefined') step = 1;
  if (step <= 0) throw new Error('Step must be positive number!');
  if (min > max) throw new Error('Min must be less than Max!');

  var values = [min], it = min;

  while(it !== max) {
    values.push(it += step);
  }
  return values;
});


defineMethod(Number.prototype, 'times', function(callEvery)
{
  if (typeof callEvery !== 'function') throw new TypeError('Parameter `callEvery` must be Function!');

  var result = [];
  var iterates = Number(this);
  for (var i = 0; i < iterates; i++) {
    result.push(callEvery(i + 0));
  }
  return result;
});




(function(){
  var definePipe = function(target, name) {
    if (!('pipe' in target)) {
      Object.defineProperty(target[name], 'pipe', {
        enumerable: false,
        configurable: false,
        value: function() {
          var caller = target[name];
          if (!(typeof process !== 'undefined' && process.env.NODE_ENV === "test")) {
            caller.apply(target, arguments);
          }
          return arguments[0];
        }
      });
    }
  };

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
          if (!(typeof process !== 'undefined' && process.env.NODE_ENV === "test")) {
            global.console.log.apply(global.console, arguments);
          }
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
          if (!(typeof process !== 'undefined' && process.env.NODE_ENV === "test")) {
            window.console.log.apply(window.console, arguments);
          }
          return arguments[0];
        }
      });
    }
  }
})();




