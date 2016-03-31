var T = require('../tools');

module.exports = T.CMI(String, 'random', function(length)
{
  function generate10() {
    return Math.random(50).toString(36).slice(2).slice(0, 10);
  }

  if (!length) {
    return generate10();
  }
  else if (length <= 10) {
    return generate10().slice(0, length);
  }
  else if (length > 10) {
    var iterat = Math.ceil(length / 10);
    var buffer = '';
    for (var i = 0; i < iterat; i++) {
      buffer += generate10();
    }
    return buffer.slice(0, length);
  }
});