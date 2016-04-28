
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
  let returner = {
    Install() {
      exports.defineMethod(target, name, method);
    },
    Feature(target, ...args) {
      return method.apply(target, args);
    }
  };

  return returner;
}


exports.createModulesMap = function createModulesMap($req, modules) {
  let list = {};
  modules.map(name => list[name] = $req('./' + name).Feature);
  return list;
}

exports.installModules = function installModules($req, modules) {
  return () => modules.map(part => $req('./' + part).Install());
}


exports.modulesKit = function($mod, $req, modules) {
  $mod.exports.Install = exports.installModules($req, modules);
  $mod.exports.Features = exports.createModulesMap($req, modules);
}
