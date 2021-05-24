import session from 'express-session';
import MongoStore from 'connect-mongo'

export default function sessionMiddleware(req, res, next) {
  try {
    const mongooseClient = global.mongoose;
    // create the mongo store
    const mongoStore = new MongoStore({
      mongoUrl: process.env.MONGODB_URI
    });
    // express session object
    return session({
      secret: process.env.SESSION_SECRET,
      store: mongoStore,
      resave: false,
      saveUninitialized: true
    })(req, res, next);

  } catch(err) {
    console.log(err)
  }
}