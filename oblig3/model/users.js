const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// This is a slightly modified version from the lecture 17th of March. It has been modified to 
// meet the requirements given in the description. I didn't include an ID as mongoDB creates one.

const UserSchema = new Schema({
    name: {type:String, required:true},
    surname: {type:String, required:true},
    email: {type:String, required:true, lowercase : true},
    role: {type:String, enum: ['student', 'teacher'], default:'student', lowercase : true},
    password: {type:String, required:true},
    place: {type:String, enum:['on-campus', 'home-office'], default:'on-campus', lowercase : true},
    status: {type:String, enum:['available', 'busy'], default:'available', lowercase : true}
});

UserSchema.pre('save',
    async function(next){
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function(password){
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;