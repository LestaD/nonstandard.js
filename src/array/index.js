
const { createModulesMap, installModules } = require('../tools');

const modules = [
  'clean',
  'contains',
  'clone',
  'empty',
  'present'
];

const ext = [
  'properties'
];

module.exports.Install = installModules(require, modules.concat(ext));
module.exports.Features = createModulesMap(require, modules);
