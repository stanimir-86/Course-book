const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],

        unique: true,

    },
    password: {
        type: String,
        required: [true, "Password is required"],

    },
    createdCourses: [{
        type:mongoose.Types.ObjectId,
        ref:'Course',
    }],
    signeUpCourses: [{
        type:mongoose.Types.ObjectId,
        ref:'Course',
    }],

});

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);

});



const User = mongoose.model('User', userSchema);

module.exports = User;