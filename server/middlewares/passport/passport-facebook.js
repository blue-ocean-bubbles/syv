/* eslint-disable */
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../../models/User';
import bcrypt from 'bcrypt';

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "http://localhost:3000/api/auth/facebook/callback",
    profileFields: ['email', 'name', 'displayName', 'photos']
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile, 'profile')
       User.findOne({ email:  profile.emails[0].value })
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            console.log(profile, 'profile')
            User.create({ firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value })
            .then((user) => {
              return done(null, user)
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
));

// Serialize Google users based off ids for sessions
passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

// Log out Google users
passport.deserializeUser((req, id, done) => {
  // find the user
  User.findOne({_id: id}, (err, user) => {
    if (err) {
      return err;
    }
    done(null, user)
  });
});

export default passport;