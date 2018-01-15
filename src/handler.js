const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');
const readFiles = require('./helper.js');

const handler = (req, res) => {
  const url = req.url;
  const basePath = __dirname.replace('src', '');

  if (url === '/') {
    readFiles(basePath, req, res, url);

   //    fs.readFile(path.join(basePath, 'public/fac.html'), 'utf8', (err, file) => {
   //    /* istanbul ignore if */
   //    if (err) {
   //      res.writeHead(500, {'content-type': 'text/plain'});
   //      res.end('server error');
   //    } else {
   //      res.writeHead(200, {'content-type': 'text/html'});
   //      res.end(file);
   //    }
   // });
  } else if (url === '/fac') {
    fs.readFile(path.join(basePath, 'public/fac.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });
  } else if (url === '/dwyl') {
    fs.readFile(path.join(basePath, 'public/dwyl.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });
  } else if (url === '/stylesheet.css') {
    fs.readFile(path.join(basePath, '/public/stylesheet.css'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(file);
      }
    });
  } else if (url === '/js/request.js') {
    fs.readFile(path.join(basePath, 'public/js/request.js'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(file);
      }
    });
  } else if (url === '/js/index.js') {
    fs.readFile(path.join(basePath, 'public/js/index.js'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(file);
      }
    });
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
