
var modules = [
  'array',
  'console',
  'number',
  'object',
  'string'
].map(function(mod){ require('./' + mod).Install(); })

