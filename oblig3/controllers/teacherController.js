const UserModel = require('../model/users');

const deleteUser = async (req, res) => {
    const email = req.body.email;

    let foundUser = await UserModel.findOne({email});
    if(foundUser){
        await UserModel.findOneAndDelete({email});
        res.status(200).json({message: "User has been deleted!"});
    } else{
        res.status(400).json({error: "User not found!"});
    }
}

module.exports = {
    deleteUser
};