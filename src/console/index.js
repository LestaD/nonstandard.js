const { definePipe } = require('../tools');

module.exports.Install = function Install() {
  definePipe(console.log);
  definePipe(console.info);
  definePipe(console.warn);
  definePipe(console.error);
  definePipe(console, true);
}
