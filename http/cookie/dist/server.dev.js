"use strict";

var http = require('http');

var fs = require('fs');

http.createServer(function (request, response) {
  console.log('request come', request.url);

  if (request.url === '/') {
    var html = fs.readFileSync('test.html', 'utf8');
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123;max-age=2', 'abc=456']
    });
    response.end(html);
  }
}).listen(8888);
console.log('server listening on 8888');