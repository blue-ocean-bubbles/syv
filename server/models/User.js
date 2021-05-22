import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: String, required: true},
});

let User = mongoose.model('User', userSchema);

mongoose.models = {};

export default User;