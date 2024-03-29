const UserModel = require('../model/users');
// This is the public controller, anyone have access to these operations

// This is the create user function that anyone can access.
const createUser = async (req, res) => {
    const {name, surname, email, role, password, place, status} = req.body;

    let foundUser = await UserModel.findOne({email});
    if(foundUser){
        return res.status(400).json({error: 'Email is already in use'});
    }

    const newUser = new UserModel({
        name: name,
        surname: surname,
        email: email.toLowerCase(),
        role: role.toLowerCase(),
        password: password,
        place: place.toLowerCase(),
        status: status.toLowerCase()
    });

    await newUser
        .save()
        .then(() => res.status(200).json({newUser}))
        .catch((error) => res.status(500).send("Something went wrong.."));
}

// This function checks if the email entered by the user is infact in the DB before it sends the
// status message.
const forgotPass = async (req, res) => {
    const email = req.body.email;

    let foundUser = await UserModel.findOne({email});
    if(foundUser){
        return res.status(200).json({message: "An e-mail with instructions has been sent to your inbox, check your mail!"});
    } else{
        return res.status(400).json({error: 'User does not exist!'});
    }
}

module.exports = {
    createUser,
    forgotPass
};