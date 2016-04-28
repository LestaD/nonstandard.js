const { CMI } = require('../tools');

module.exports = CMI(String, 'random', function(length)
{
  const generate10 = () => Math.random(50).toString(36).slice(2).slice(0, 10);

  if (!length) {
    return generate10();
  }
  else if (length <= 10) {
    return generate10().slice(0, length);
  }
  else if (length > 10) {
    const iterat = Math.ceil(length / 10);
    let buffer = '';
    for (let i = 0; i < iterat; i++) {
      buffer += generate10();
    }
    return buffer.slice(0, length);
  }
});
