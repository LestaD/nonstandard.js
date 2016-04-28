
module.exports.Install = function Install() {
  [
    'range',
    'times'
  ].map(part => require('./' + part).Install());
}
