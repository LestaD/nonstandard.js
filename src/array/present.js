var T = require('../tools');

module.exports = T.CMI(Array, 'present', function(target)
{
  return !Array.empty(target);
});