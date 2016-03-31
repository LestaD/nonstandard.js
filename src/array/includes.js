var T = require('../tools');

module.exports = T.CMI(Array.prototype, 'includes', function(searchElements)
{
  var that = this;

  if (!Array.isArray(searchElements)) {
    searchElements = [searchElements];
  }
  return searchElements.every(function(element){
    return that.indexOf(element) > -1;
  });
});