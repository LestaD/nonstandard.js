var T = require('../tools');

module.exports = T.CMI(Object, 'present', function(target)
{
  return !Object.empty(target);
});