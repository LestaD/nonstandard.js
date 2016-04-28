const { CMI } = require('../tools');

module.exports = CMI(Array, 'present', function(target)
{
  return !Array.empty(target);
});
