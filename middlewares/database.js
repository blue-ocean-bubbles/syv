import { MongoClient } from 'mongodb';
let mongoClient;

try {
  // create mongo client connection to remote db
  mongoClient = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch(err) {
  // return errors if it fails
  console.log('Failed connecting to remote mongo db');
  res.status(500).json({message: 'Failed to create remote mongo client.'});
}

// export the database connection into our 'request' express object
export default async function database(req, res, next) {
  try {
    // make connection if we dont currently have one
    if (!mongoClient.isConnected()) {
      await mongoClient.connect();
      console.log('Mongo database connected successfully.')
    }
    // set the mongo client to the req object for accessibility
    req.dbClient = mongoClient;
    req.db = mongoClient.db(process.env.DB_NAME);
    return next();
  } catch (err) {
    console.log('Failed connecting to remote mongo db');
    res.status(500).json({message: 'Remote mongodb failed to connect.'})
  }
}