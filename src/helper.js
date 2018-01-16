const fs = require('fs');
const path = require('path');

module.exports = readFiles;

function readFiles(path, type, req, res) {

  fs.readFile(path, 'utf8', (err, file) => {
  /* istanbul ignore if */
  if (err) {
    res.writeHead(500, {'content-type': 'text/plain'});
    res.end('server error');
  } else {
    res.writeHead(200, {'content-type': type});
    res.end(file);
  }
  });
}
