/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import passport from '../../server/middlewares/passport/passport-local';
import passportGoogle from '../../server/middlewares/passport/passport-google'
const handler = nextConnect();
handler.use(middleware);

handler.post(passport.authenticate('local'), (req, res, next) => {
  // return our user object
  console.log(req.user);
  res.json({ message:'Logged in successfully' });
});

handler.get(passportGoogle.authenticate('google', ['profile', 'email']), (req, res, next) => {
  // return our user object
  console.log(req.user);
  res.json({ message:'Logged in successfully' });
});

export default handler;