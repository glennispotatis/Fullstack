const http = require('http');

http.createServer((req, res) => { // Create server object 
    const myUrl = new URL(req.url, "http://localhost:8081");
    console.log(myUrl);

    res.writeHead(200, { 'User-message': 'The file was not found', 'Content-Type': 'text/html' });

    const backgroundColor = myUrl.searchParams.get('background-color').toString();
    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: ${backgroundColor};
                    }
                </style>
            </head>
            <body>
            </body>
        </html>
    `);
}).listen(8081);

