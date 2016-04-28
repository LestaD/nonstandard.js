const { CMI } = require('../tools');

module.exports = CMI(Number, 'range', function(min, max, step = 1)
{
  if (typeof min !== 'number'
      || typeof max !== 'number'
      || (typeof step !== 'undefined' && typeof step !== 'number')) {
    throw new TypeError('Arguments for Number.range() must be Number');
  }

  if (step <= 0) throw new Error('Step must be positive number!');
  if (min > max) throw new Error('Min must be less than Max!');

  let values = [min]
  let it = min;

  while(it !== max) {
    values.push(it += step);
  }
  return values;
});
