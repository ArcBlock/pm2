
var axm = require('@arcblock/pm2.io');

axm.action('refresh:db', function(reply) {
  console.log('Refreshing');
  reply({success : true, subobj : { a : 'b'}});
});
