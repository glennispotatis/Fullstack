const UserModel = require('../model/users');

const getAllUsers = async (req, res) => {
    await UserModel.find({}, "name surname status place role")
        .then(users => {res.status(200).json({users})})
        .catch((error) => res.status(500).send("Something went wrong.."));
}

module.exports = {
    getAllUsers
};