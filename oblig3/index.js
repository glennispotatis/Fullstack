/* 
Most of this code was taken from the lecture 17th of March.
*/
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const port = 3000;

require('./auth/auth');
const routes = require('./routes/routes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

app.use(express.json());
app.use('/', routes);
app.use('/dashboard', passport.authenticate('jwt', { session: false }), studentRoutes);

// This code was taken from stackoverflow, it ensures that the user trying to enter
// the site, is infact authenticated as a teacher.
const teacherGuard = (req, res, next) => {
    if (req.user && req.user.role === 'teacher') {
        next();
    } else {
        res.status(403).json({Error: "You are not authorized!"});
    }
}
app.use('/user', passport.authenticate('jwt', { session: false }), teacherGuard, teacherRoutes);

mongoose.connect(
    'mongodb://localhost:27017/oblig3-users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err });
});

db.on('error', (err) => console.log('There was an error connecting to the db', err));
db.on('open', () => console.log('Connected to the database!'));
app.listen(port, () => console.log(`Express server running on port ${port}`));