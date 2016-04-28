
module.exports.Install = function Install() {
  [
    'properties',
    'clean',
    'included',
    'clone',
    'empty',
    'present'
  ].map(part => require('./' + part).Install());
}
