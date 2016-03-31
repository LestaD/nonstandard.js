var T = require('../tools');

module.exports.Install = function Install() {
  T.definePipe(console.log);
  T.definePipe(console.info);
  T.definePipe(console.warn);
  T.definePipe(console.error);
  T.definePipe(console, true);
}