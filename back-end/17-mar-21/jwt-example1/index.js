const express = require('express');
const User = require('./models/users');
const app = express();
const port = 4000;

// Public access
app.get('/', (req, res) => {
        res.status(200).json('Hello visitor!');
});

app.post('/signup', async function(req, res){
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({error: 'You must provide a valid email and password'});
    }

    let foundUser = await User.findOne({ email });
    if(foundUser){
        return res.status(400).json({error: 'Email is already in use'});
    }

    const newUser = new User({ email, password });

    await User.save();
})

app.listen(port, () => console.log(`Express server running on port ${port}`));