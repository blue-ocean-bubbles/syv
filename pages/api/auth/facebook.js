import nextConnect from 'next-connect';
import middleware from '../../../server/middlewares';
import passport from '../../../server/middlewares/passport/passport-facebook';

const handler = nextConnect();
handler.use(middleware);

handler.get(passport.authenticate('facebook'), (req, res) => {
  // return our user object
  res.json({ message: 'Logged in successfully with google', user: req.user });
});

export default handler;
