/* eslint-disable */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String},
});

// const SALT_WORK_FACTOR = 10;
// before saving the password, hash it to the database
// userSchema.pre('save', function(next) {
//     let user = this;
//     // generate salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);
//         // hash the password with salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
//             user.password = hash;
//             next();
//         });
//     });
// });

// // custom user method to compare password
// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

let User = mongoose.model('User', userSchema);

mongoose.models = {};

export default User;