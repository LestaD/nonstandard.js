var T = require('../tools');

module.exports = T.CMI(Object, 'empty', function(target)
{
  if (typeof target !== 'object') throw new TypeError('Parameter `target` must be Object!');
  if (Array.isArray(target)) throw new TypeError('Use Array.empty()!');

  return Object.keys(target).length === 0;
});