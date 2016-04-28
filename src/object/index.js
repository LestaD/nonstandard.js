
module.exports.Install = function Install() {
  [
    'clone',
    'empty',
    'present'
  ].map(part => require('./' + part).Install());
}
