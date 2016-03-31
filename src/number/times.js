var T = require('../tools');

module.exports = T.CMI(Number.prototype, 'times', function(callEvery)
{
  if (typeof callEvery !== 'function') throw new TypeError('Parameter `callEvery` must be Function!');

  var result = [];
  var iterates = Number(this);
  for (var i = 0; i < iterates; i++) {
    result.push(callEvery(i + 0));
  }
  return result;
});