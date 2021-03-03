const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs-extra');

app.use(express.json());

let users = fs.readJSONSync('./users.json');
let lastid = users.length === 0 ? 0 : users[users.length - 1].id;

// GET user by name
app.get(
    '/users',
    (req, res) => {
        let userName = req.query.name;

        if (userName) {
            users.forEach(user => {
                if (user.name == userName) {
                    res.status(200).json(user);
                }
            });
        } else{
            res.status(200).json(users);
        }
    }
);

// POST: Create a new user
app.post(
    '/users',
    (req, res) => {
        let name = req.body.name;
        let status = "busy";
        let place = "home-office"

        if (name) {
            users.push({
                id: ++lastid,
                name,
                status,
                place
            });
        }

        fs.writeJSON('./users.json', users, (err) => {
            if (err) {
                const message = { message: 'Could not add to the DB' }
                res.status(500).send(message);
            } else {
                res.status(200).json(users);
            }
        });
    }
);

// PATCH: Change status of user by ID
app.patch(
    '/users/status',
    (req, res) => {
        let userId = req.query.id;
        let newStatus = req.body.status;

        if(!userId){
            res.status(400).json("You must include an ID as a query param");
        } else{
            if(!newStatus){
                res.status(400).json("You must specify a new status in the body of your request");
            }else{
                users.forEach(user => {
                    if(user.id == userId){
                        user.status = newStatus;
                    }
                });

                fs.writeJSON('./users.json', users, (err) => {
                    if (err) {
                        const message = { message: 'Could not add to the DB' }
                        res.status(500).send(message);
                    } else {
                        res.status(200).json(users);
                    }
                })
            }
        }
    }
);

// PATCH: Change place for user by ID
app.patch(
    '/users/place',
    (req, res) => {
        let userId = req.query.id;
        let newPlace = req.body.place;

        if(!userId){
            res.status(400).json("You must include an ID as a query param");
        } else{
            if(!newPlace){
                res.status(400).json("You must specify a new place in the body of your request");
            }else{
                users.forEach(user => {
                    if(user.id == userId){
                        user.place = newPlace;
                    }
                });

                fs.writeJSON('./users.json', users, (err) => {
                    if (err) {
                        const message = { message: 'Could not add to the DB' }
                        res.status(500).send(message);
                    } else {
                        res.status(200).json(users);
                    }
                })
            }
        }
    }
);

//GET: All users in campus
app.get(
    '/users/campus',
    (req, res) => {
        let usersOnCampus = [];
        users.forEach(user => {
            if(user.place == 'on-campus'){
                usersOnCampus.push(user);
            }
        });

        res.status(200).json(usersOnCampus);
    }
);

// GET: ALl users at home office
app.get(
    '/users/home',
    (req, res) => {
        let usersAtHome = [];
        users.forEach(user => {
            if(user.place == 'home-office'){
                usersAtHome.push(user);
            }
        });
        
        res.status(200).json(usersAtHome);
    }
);

//DELETE: Remove a user by ID
app.delete(
    '/users/delete',
    (req, res) => {
        let userId = req.query.id;

        if(!userId){
            res.status(500).json("You must include the id of the user to remove in your query");
        }else{
            users = users.filter(user => user.id != userId);

            fs.writeJSON('./users.json', users, (err) => {
                if (err) {
                    const message = { message: 'Could not delete user in the DB' }
                    res.status(500).send(message);
                } else {
                    res.status(200).json(users);
                }
            })
        }
    }
);

app.listen(port, () => console.log(`User server listening on port ${port}`));