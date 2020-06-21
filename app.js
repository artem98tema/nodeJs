var http = require('http');

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('<h1>hi man</h1>');
    res.write('<h1>hi man</h1>');
    res.write('<h1>hi man</h1>');
    res.end('Hello World!');
}).listen(8080);
