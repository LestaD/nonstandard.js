
module.exports.Install = function Install() {
  [
    'properties',
    'clean',
    'includes',
    'clone',
    'empty',
    'present'
  ].map(part => require('./' + part).Install());
}
