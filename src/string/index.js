
module.exports.Install = function Install() {
  [
    'random'
  ].map(part => require('./' + part).Install());
}
