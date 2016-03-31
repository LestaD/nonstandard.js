var T = require('../tools');

module.exports = T.CMI(Array, 'empty', function(target)
{
  if (!Array.isArray(target)) throw new TypeError('Parameter `target` must be Array!');

  return target.length === 0;
});