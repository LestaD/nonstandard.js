var T = require('../tools');

module.exports = T.CMI(Number, 'range', function(min, max, step)
{
  if (typeof min !== 'number'
      || typeof max !== 'number'
      || (typeof step !== 'undefined' && typeof step !== 'number')) {
    throw new TypeError('Arguments for Number.range() must be Number');
  }

  if (typeof step === 'undefined') step = 1;
  if (step <= 0) throw new Error('Step must be positive number!');
  if (min > max) throw new Error('Min must be less than Max!');

  var values = [min], it = min;

  while(it !== max) {
    values.push(it += step);
  }
  return values;
});