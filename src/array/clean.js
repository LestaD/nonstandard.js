var T = require('../tools');

module.exports = T.createMethodInstaller(Array.prototype, 'clean', function clean(deleteValue)
{
  for (var foundId = 0; foundId < this.length; foundId++) {
    if (this[foundId] === deleteValue || (typeof deleteValue === 'function' && deleteValue(this[foundId]))) {
      this.splice(foundId, 1);
      foundId--;
    }
  }
  return this;
});