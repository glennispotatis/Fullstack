const UserModel = require('../model/users');
// These functions can only be accessed by Teachers.

// A teacher should be able to delete a user.
const deleteUser = async (req, res) => {
    const email = req.body.email;

    let foundUser = await UserModel.findOne({ email });
    if (foundUser) {
        await UserModel.findOneAndDelete({ email });
        res.status(200).json({ message: "User has been deleted!" });
    } else {
        res.status(400).json({ error: "User not found!" });
    }
}

// A teacher should be able to update users information.
const updateUser = async (req, res) => {
    const { newName, newSurname, newEmail, newRole, newPlace, newStatus } = req.body;
    const email = req.body.email;
    const exist = await UserModel.findOne({ email });

    // These if sentences are my error handlers, they check if the inputs are valid and can be changed.
    if (!email) {
        return res.status(400).json({ error: "You must provide a user to update" });
    }
    if (!exist) {
        return res.status(400).json({ error: "User does not exist!" });
    }
    if (!newName && !newSurname && !newEmail && !newRole && !newPlace && !newStatus) {
        return res.status(400).json({ error: "You must specify what to update" });
    }
    // Explanation for this setup can be found in readme.md>* Update userfields in DB
    if (newRole) {
        if (newRole === 'teacher' || newRole === 'student') { }
        else {
            return res.status(400).json({ error: "Invalid role" });
        }
    }
    if (newPlace) {
        if (newPlace === 'on-campus' || newPlace === 'home-office') { }
        else {
            return res.status(400).json({ error: "Invalid place" });
        }
    }
    if (newStatus) {
        if (newStatus === 'busy' || newStatus === 'available') { }
        else {
            return res.status(400).json({ error: "Invalid status" });
        }
    }

    // If the validation above is passed, the function will update the users information.
    // The key that it searches for is the email, since it is unique, and therefore, as stated in
    // readme.md, email has to be updated last, both here and in the body.
    if (newName) {
        await UserModel.findOneAndUpdate({ email }, { $set: { name: newName } });
    }
    if (newSurname) {
        await UserModel.findOneAndUpdate({ email }, { $set: { surname: newSurname } });
    }
    if (newRole) {
        await UserModel.findOneAndUpdate({ email }, { $set: { role: newRole } });
    }
    if (newPlace) {
        await UserModel.findOneAndUpdate({ email }, { $set: { place: newPlace } });
    }
    if (newStatus) {
        await UserModel.findOneAndUpdate({ email }, { $set: { status: newStatus } });
    }
    if (newEmail) {
        await UserModel.findOneAndUpdate({ email }, { $set: { email: newEmail } });
    }
    res.status(200).json({ message: "User has been updated" });
}

module.exports = {
    deleteUser,
    updateUser
};