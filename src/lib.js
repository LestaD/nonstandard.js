
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

function definePipe(target, defaultBind) {
  defineMethod(target, 'pipe', function()
  {
    var context = defaultBind ? console.log : target;

    if (!(typeof process !== 'undefined' && process.env.NODE_ENV === "test")) {
      context.apply(context, arguments);
    }
    return arguments[0]; // arguments is not Array
  });
}


// ===== Array.prototype ===== //


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


// ===== Array ===== //


defineMethod(Array, 'empty', function(target)
{
  if (!Array.isArray(target)) throw new TypeError('Parameter `target` must be Array!');

  return target.length === 0;
});


defineMethod(Array, 'present', function(target)
{
  return !Array.empty(target);
});


// ===== Object ===== //


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
  if (typeof target !== 'object') throw new TypeError('Parameter `target` must be Object!');
  if (Array.isArray(target)) throw new TypeError('Use Array.empty()!');

  return Object.keys(target).length === 0;
});


defineMethod(Object, 'present', function(target)
{
  return !Object.empty(target);
});


// ===== Number ===== //


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

// ===== Number.prototype ===== //


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


// ===== Console Pipes ===== //


definePipe(console.log);
definePipe(console.info);
definePipe(console.warn);
definePipe(console.error);
definePipe(console, true);


// ===== String ===== //

defineMethod(String, 'random', function(length)
{
  function generate10() {
    return Math.random(50).toString(36).slice(2).slice(0, 10);
  }

  if (!length) {
    return generate10();
  }
  else if (length <= 10) {
    return generate10().slice(0, length);
  }
  else if (length > 10) {
    var iterat = Math.ceil(length / 10);
    var buffer = '';
    for (var i = 0; i < iterat; i++) {
      buffer += generate10();
    }
    return buffer.slice(0, length);
  }
});

