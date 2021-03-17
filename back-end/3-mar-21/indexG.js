const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs-extra');

app.use(express.json());

var people = fs.readJSONSync('./people.json');
let lastid = people.length === 0 ? 0 : people[people.length - 1].id;

app.get( //Implement GET
    '/people',
    (req, res) => {
        res.status(200).json(people);
    });

app.post(
    '/people',
    (req, res) => {
        var firstName = req.body.firstName;
        if (firstName) {
            people.push({
                id: ++lastid,
                firstName,
                children: []
            });
            fs.writeJson('./people.json', people, (err) => {
                if (err) {
                    const message = { message: 'Could not add the person to the people db' };
                    res.status(500).send(message);
                } else {
                    res.status(200).json(people);
                }
            });
        }
    });

app.delete(
    '/people',
    (req, res) => {
        var personId = req.query.id;
        if (personId) {
            people = people.filter(person => person.id != personId);
            fs.writeJson('./people.json', people, (err) => {
                if (err) {
                    const message = { message: "Could not delete person from database" };
                    res.status(500).json(message);
                } else {
                    res.status(200).json(people);
                }
            });
        }
    }
);

app.post(
    '/people/children',
    (req, res) => {
        var personId = req.query.id;

        if (personId) {
            const children = req.body.children;

            if (!children) {
                const message = { message: 'No children found in body request' };
                res.status(400).json(message);
            } else {
                people.forEach(person => {
                    if (person.id == personId) {
                        person.children.push(children);
                    }
                });
            }

            fs.writeJson('./people.json', people, (err) => {
                if (err) {
                    const message = { message: "Could not add children to the desired person" };
                    res.status(500).json(message);
                } else {
                    res.status(200).json(people);
                }
            });
        }
    });

app.patch(
    '/people',
    (req, res) => {
        var personId = req.query.id;
        if (personId) {
            var newFirstName = req.body.newFirstName;

            // console.log( firstName ); 
            if (!newFirstName) {
                const message = { message: 'There is no firstName to update' };
                res.status(400).json(message);
            } else {
                people.forEach(person => {
                    if (person.id == personId) {
                        person.firstName = newFirstName;
                    }
                });
            }

            fs.writeJson('./people.json', people, (err) => {
                if (err) {
                    const message = { message: "Could not update person name" };
                    res.statusCode(500).json(message);
                } else {
                    res.status(200).json(people);
                }
            });
        }
    });

app.listen(
    port,
    () => {
        console.log(`Server listening in port ${port}`);
    });