const { CMI } = require('../tools');

module.exports = CMI(Array.prototype, 'contains', function(searchElements)
{
  if (!Array.isArray(searchElements)) {
    searchElements = [searchElements];
  }
  return searchElements.every(element => this.indexOf(element) > -1);
});
