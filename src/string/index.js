var T = require('../tools');

module.exports.Install = function Install() {
  var modules = [
    'random'
  ];

  modules.map(function(part) {
    require('./' + part).Install();
  });
}
