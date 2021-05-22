import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});
  
let User = mongoose.model('User', userSchema);

mongoose.models = {};

export default User;