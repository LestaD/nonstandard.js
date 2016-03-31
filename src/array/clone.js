var T = require('../tools');

module.exports = T.CMI(Array.prototype, 'clone', function()
{
  return this.slice(0);
});