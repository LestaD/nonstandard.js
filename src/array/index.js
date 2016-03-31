var T = require('../tools');

module.exports.Install = function Install() {
  var modules = [
    'properties',
    'clean',
    'includes',
    'clone',
    'empty',
    'present'
  ];

  modules.map(function(part) {
    require('./' + part).Install();
  });
}
