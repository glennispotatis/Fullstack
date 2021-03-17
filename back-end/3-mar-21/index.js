const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs-extra');

app.use(express.json());

let people = fs.readJSONSync('./people.json');
let lastid = people.length === 0 ? 0 : people[people.length - 1].id;

app.get(
    '/people',
    (req, res) => {
        res.status(200).json(people);
    }
);

app.post(
    '/people',
    (req, res) => {
        let firstName = req.body.firstName;

        if (firstName) {
            people.push({
                id: ++lastid,
                firstName,
                children: []
            });

            fs.writeJSON('./people.json', people, (err) => {
                if (err) {
                    const message = { message: 'Could not add person' };
                    res.status(500).send(message);
                } else {
                    res.status(200).json(people);
                }
            })
        }
    }
);

app.post(
    '/people/children',
    (req, res) => {
        let personId = req.query.id;

        if (personId) {
            const children = req.body.children;
            if (!children) {
                const message = { message: 'No children found in body' };
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
                    const message = { message: 'Could not add children' };
                    res.status(500).send(message);
                } else {
                    res.status(200).json(people);
                }
            })
        }

    }
);

app.delete(
    '/people',
    (req, res) => {
        let personId = req.query.id;
        if (personId) {
            people = people.filter(person => person.id != personId);

            fs.writeJson('./people.json', people, (err) => {
                if (err) {
                    const message = { message: 'Could not delete person' };
                    res.status(500).send(message);
                } else {
                    res.status(200).json(people);
                }
            })
        }
    }
);

app.listen(
    port,
    () => {
        console.log(`Server listening on port ${port}`);
    });