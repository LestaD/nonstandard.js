
exports.defineProperty = function defineProperty(target, name, getter, setter) {
  if (typeof target[name] !== 'undefined') return;

  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    get: getter,
    set: setter
  });
}

exports.defineMethod = function defineMethod(target, name, method) {
  if (typeof target[name] !== 'undefined') return;

  Object.defineProperty(target, name, {
    enumerable: false,
    configurable: false,
    value: method
  });
}

exports.definePipe = function definePipe(target, defaultBind) {
  exports.defineMethod(target, 'pipe', function()
  {
    var context = defaultBind ? console.log : target;

    if (!(typeof process !== 'undefined' && process.env.NODE_ENV === "test")) {
      context.apply(context, arguments);
    }
    return arguments[0]; // arguments is not Array
  });
}

exports.createMethodInstaller = exports.CMI = function createMethodInstaller(target, name, method) {
  var returner = {};
  returner.Install = function Install() {
    exports.defineMethod(target, name, method);
  }
  return returner;
}
