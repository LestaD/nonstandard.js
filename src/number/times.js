const { CMI } = require('../tools');

module.exports = CMI(Number.prototype, 'times', function(callEvery)
{
  console.log(callEvery);
  if (typeof callEvery !== 'function') throw new TypeError('Parameter `callEvery` must be Function!');

  let result = [];
  const iterates = Number(this);

  for (let i = 0; i < iterates; i++) {
    result.push(callEvery(i + 0));
  }
  return result;
});
