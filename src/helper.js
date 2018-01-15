const fs = require('fs');
const path = require('path');

// module.exports = {
//   readFiles: readFiles,
//   handleAPI: handleAPI,
//   serverError: serverError
// }

  // function readFiles(basepath, req, res, url) {
  //   const extension= url.split('.')[1];
  //   const contentType = url.split('/').length === 2 ? extension === 'css' ? 'text/css' : 'text/javascript': 'text/html';
  //
  //   fs.readFile(path.join(basepath, 'public/fac.html'), 'utf8', (err, file) => {
  //     console.log(path, file);
  //     if (err) {
  //       res.writeHead(500, {'content-type': 'text/plain'});
  //       res.end('Server error');
  //     } else {
  //       res.writeHead(200, {'content-type': `${contentType}`});
  //       res.end(file);
  //     }
  //   });
  // }
 //
  function readFiles(basePath, req, res, url) {
    const extension= url.split('.')[1];
    const contentType = url.split('/').length === 2 ? 'text/javascript': 'text/html';
    fs.readFile(path.join(basePath, 'public/fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      console.log(contentType);
      console.log(url.split('.'));
      res.end(file);
    }
  });
 }

  // define handleAPI function
  function handleAPI(json) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(json));
  }
  // define serverError function
  function serverError() {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404 server error');
  }

module.exports = readFiles;
