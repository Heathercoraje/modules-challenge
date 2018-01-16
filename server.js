const http = require('http');
const handler = require('./src/handler.js');

const server = http.createServer(handler);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

server.listen(port);
console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server
}
