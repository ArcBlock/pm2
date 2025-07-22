
var axm = require('@arcblock/pm2.io');

//axm.catchAll();

setTimeout(function() {
  throw new Error('Exit');
}, 200);
