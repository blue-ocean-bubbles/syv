/* eslint-disable */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import User from '../../models/User';
import bcrypt from 'bcrypt';

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

passport.deserializeUser((req, id, done) => {
  // find the user
  User.findOne({_id: id}, (err, user) => {
    if (err) {
      return err;
    }
    done(null, user)
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //callbackURL -> after logging in redirected to
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       console.log(profile);
       User.findOne({ email:  profile.emails[0].value })
        .then((user) => {
          if (user) {
            done(null, user);
          } else {
            User.create({ firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value })
            .then((user) => {
              done(null, user)
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }
));

export default passport;