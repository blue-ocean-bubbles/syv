import mongoose from 'mongoose';

async function database(req, res, next) {
  try {
    // check to see if mongo db is already connected via mongoose
    if (!global.mongoose) {
      // create the mongoose/mongo connection
      global.mongoose = await mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
    console.log('Connected to mongo db.');
  } catch (err) {
    console.log('Failed connecting to remote mongo db');
    res.status(500).json({ message: 'Remote mongodb failed to connect.' });
  }
  return next();
}

export default database;
