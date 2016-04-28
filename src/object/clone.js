const { CMI } = require('../tools');

module.exports = CMI(Object, 'clone', function(target)
{
  if (typeof target !== 'object') throw new TypeError('Parameter `target` must be Object!');

  const newObj = {};
  const keys = Object.keys(target);

  for (const index in keys) {
    const key = keys[index];

    if (Array.isArray(target[key])) {
      newObj[key] = [...target[key]];
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
