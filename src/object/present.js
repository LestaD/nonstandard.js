const { CMI } = require('../tools');

module.exports = CMI(Object, 'present', function(target)
{
  return !Object.empty(target);
});
