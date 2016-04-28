const { CMI } = require('../tools');

module.exports = CMI(Array.prototype, 'clone', function()
{
  return this.slice(0);
});
