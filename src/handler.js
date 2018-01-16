const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');
const readFiles = require('./helper.js');
const handleAPI = require('./helper.js');
const serverError = require('./helper.js');


const handler = (req, res) => {
  const url = req.url;
  const basePath = __dirname.replace('src', '');

  if (url === '/') {
    readFiles(basePath.concat('public/fac.html'), 'text/html', req, res);
  } else if (url === '/fac') {
    readFiles(basePath.concat('public/fac.html'), 'text/html', req, res);
  } else if (url === '/dwyl') {
    readFiles(basePath.concat('public/dwyl.html'), 'text/html', req, res);
  } else if (url === '/stylesheet.css') {
    readFiles(basePath.concat('public/stylesheet.css'), 'text/css', req, res);
  } else if (url === '/js/request.js') {
    readFiles(basePath.concat('public/js/request.js'), 'text/javascript', req, res);
  } else if (url === '/js/index.js') {
    readFiles(basePath.concat('public/js/index.js'), 'text/javascript', req, res);
  } else if (url === '/api/repos/fac') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.fac));
  } else if (url === '/api/repos/dwyl') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.dwyl));
  } else {
      res.writeHead(404, {'content-type': 'text/plain'});
      res.end('404 server error');
    }
}


module.exports = handler;
