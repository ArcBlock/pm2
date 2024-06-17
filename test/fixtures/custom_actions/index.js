
var pmx = require('@arcblock/pm2.io');

pmx.action('ping', function(reply) {
  return reply({ 'pong' : 'hehe' })
});

pmx.action('param', function(data, reply) {
  return reply(data)
});

setInterval(function() {
}, 1000);
