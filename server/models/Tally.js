import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

const tallySchema = new mongoose.Schema({
  name: String,
  district: String,
  contest: String,
});

const Tally = mongoose.model('Tally', tallySchema);

export default Tally;
