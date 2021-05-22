import session from 'express-session';
import MongoStore from 'connect-mongo'

export default function sessionMiddleware(req, res, next) {
  try {
    // create the mongo store
    const mongoStore = new MongoStore({
      client: req.dbClient,
      stringify: false,
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