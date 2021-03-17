const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./models/users');
const app = express();
const port = 4000;

require('./passport');

app.use(express.json());

mongoose.connect(
    'mongodb+srv://Glennis:Glennis123@cluster0.x2hzy.mongodb.net/user-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

// Public access
app.get('/', (req, res) => {
    res.status(200).json('Hello visitor!');
});

app.post('/signup', async function (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'You must provide a valid email and password' });
    }

    let foundUser = await User.findOne({ email });
    if (foundUser) {
        return res.status(400).json({ error: 'Email is already in use' });
    }

    const newUser = new User({ email, password });

    await newUser.save();

    const genToken = user => {
        return jwt.sign(
            {
                userId: user.id
            },
            'supersecret'
        );
    }

    const token = genToken(newUser);
    res.status(200).json({ token });
})

app.get('/secret', passport.authenticate('jwt', { session: false }),
    (req, res) => { res.json('You are now in a secret place') }
)

db.on('error', (err) => console.log('There was an error connecting to the db', err));
db.on('open', () => console.log('Connected to the database!'));
app.listen(port, () => console.log(`Express server running on port ${port}`));