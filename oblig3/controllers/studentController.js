const UserModel = require('../model/users');
// These functions can be accessed by both teachers and students.
// From the description it says that Students can check the name, surname, status, place and role.

const getAllUsers = async (req, res) => {
    await UserModel.find({}, "name surname status place role")
        .then(users => {res.status(200).json({users})})
        .catch((error) => res.status(500).send("Something went wrong.."));
}

module.exports = {
    getAllUsers
};