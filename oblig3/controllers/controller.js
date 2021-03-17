const UserModel = require('../model/users');

const createUser = async (req, res) => {
    const {name, surname, email, role, password, place, status} = req.body;

    let foundUser = await UserModel.findOne({email});
    if(foundUser){
        return res.status(400).json({error: 'Email is already in use'});
    }

    const newUser = new UserModel({
        name: name,
        surname: surname,
        email: email,
        role: role,
        password: password,
        place: place,
        status: status
    });

    await newUser
        .save()
        .then(() => res.status(200).json({newUser}))
        .catch((error) => res.status(500).send("Something went wrong.."));
}


module.exports = {
    createUser
};