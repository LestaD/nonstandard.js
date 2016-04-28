
module.exports.Install = function Install() {
  [
    'properties',
    'clean',
    'contains',
    'clone',
    'empty',
    'present'
  ].map(part => require('./' + part).Install());
}
