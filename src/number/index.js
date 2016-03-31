var T = require('../tools');

module.exports.Install = function Install() {
  var modules = [
    'range',
    'times'
  ];

  modules.map(function(part) {
    require('./' + part).Install();
  });
}
