const http = require('http');

http.createServer((req, res) => { // Create server object 
    const myUrl = new URL(req.url, "http://localhost:8081");
    console.log(myUrl);

    res.writeHead(200, {
        'User-message': 'The file was not found', 'Content-Type': 'text/html', 'firstName': myUrl.searchParams.get('firstName')
    });

    let backgroundColor;
    if (myUrl.searchParams.get('favColor')) {
        backgroundColor = myUrl.searchParams.get('favColor').toString();
    } else {
        backgroundColor = 'white';
    }

    let firstName;
    if (myUrl.searchParams.get('firstName')) {
        firstName = myUrl.searchParams.get('firstName').toString();
    } else {
        firstName = "stranger";
    }

    let lastName;
    if (myUrl.searchParams.get('lastName')) {
        lastName = myUrl.searchParams.get('lastName').toString();
    } else {
        lastName = "";
    }


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
                <h1>Hello ${firstName} ${lastName}!</h1>
                <p>Here is your page color ${backgroundColor}.</p>
            </body>
        </html>
    `);
}).listen(8081);

