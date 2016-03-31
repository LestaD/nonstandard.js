var T = require('../tools');

module.exports = T.CMI(Object, 'clone', function(target)
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