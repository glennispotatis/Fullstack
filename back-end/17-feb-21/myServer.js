const http = require('http');

http.createServer((req, res) => { // Create server object   
    res.write('Server here!');    // Send to the client
    res.end();
}).listen(8081);

