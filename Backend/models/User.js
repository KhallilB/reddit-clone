const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'Email Is Required']
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    }
})