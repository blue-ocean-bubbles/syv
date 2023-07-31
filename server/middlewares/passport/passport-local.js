/* eslint-disable */
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../../models/User';

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        // compare user password
        // if matched, return the user for session
        if (user) {
          await user.comparePassword(password, (err, isMatch) => {
            if (isMatch) {
              return done(null, user);
            }
            // else return false
            return done(null, false);
          });
        } else {
        // else return
        return done(null, false);
        }
      } catch(err) {
        console.log(err);
        return done(err, false);
      }
    },
  ),
);

// Serialize users based off ids for sessions
passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

// Log out users
passport.deserializeUser((req, id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return err;
    }
    done(null, user);
  });
});

export default passport;
