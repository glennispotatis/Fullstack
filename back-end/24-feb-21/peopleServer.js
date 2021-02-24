const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./people.json');
let people = JSON.parse(data);

let lastid = people.length === 0 ? 0 : people[people.length - 1].id;

// Creating the server
const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, "http://localhost:9000");
    //CRUD -->
    //Read
    if (myUrl.pathname == '/people' && req.method == 'GET') {
        // Implement GET
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(people));
    }

    //Create
    if (myUrl.pathname == '/people' && req.method == 'POST') {
        // Create people
        req.on('data', data => {
            const jsondata = JSON.parse(data);
            const firstName = jsondata.firstName;
            if (firstName) {
                people.push({
                    id: ++lastid,
                    firstName,
                    children: []
                });

                // Write people array to the file
                fs.writeFile('./people.json', JSON.stringify(people), (err) => {
                    if (err) {
                        const message = { message: 'Could not add the person to the people DB' };
                        res.writeHead(500, { 'Content-Type': 'application/json' }); // Internal error
                        res.end(JSON.stringify(message));
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(people));
                    }
                });
            }
        });
    }

    //Update
    if (myUrl.pathname == '/people/children' && req.method == 'POST') {
        // Give people children
        req.on('data', data => {
            let personId = myUrl.searchParams.get('id');

            if (personId) {
                const jsondata = JSON.parse(data);
                const children = jsondata.children;

                if (!children) {
                    const message = { message: 'No children found in body' };
                    res.writeHead(400, { 'Content-Type': 'application/json' }); // Bad request!!
                    res.end(JSON.stringify(message));
                } else {
                    people.forEach(person => {
                        if (person.id == personId) {
                            person.children.push(children);
                        }
                    });
                }

                fs.writeFile('./people.json', JSON.stringify(people), (err) => {
                    if (err) {
                        const message = { message: 'Could not add the children to the desired person' };
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(message));
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(people));
                    }
                });
            }
        });
    }

    //Delete
    if (myUrl.pathname == '/people' && req.method == 'DELETE') {
        // Remove people from the db
        let personId = myUrl.searchParams.get('id');

        if (personId) {
            people = people.filter(person => person.id != personId);

            fs.writeFile('./people.json', JSON.stringify(people), (err) => {
                if (err) {
                    const message = { message: 'Could not delete entry' };
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(message));
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(people));
                }
            });
        }
    }
}).listen(9000);