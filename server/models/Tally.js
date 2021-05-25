import mongoose from 'mongoose';

mongoose.models = {};

const tallySchema = new mongoose.Schema({
  name: String,
  contest: String,
  count: { type: Number, default: 1 },
});

const Tally = mongoose.model('Tally', tallySchema);

export default Tally;
