import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../../models/User';

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

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      const user = await User.findOne({ email });
      // compare user password
      // if matched, return the user for session
      await user.comparePassword(password, (err, isMatch) => {
        if (isMatch) {
          return done(null, user);
        }
        // else return false
        return done(null, false);
      });
    },
  ),
);

export default passport;