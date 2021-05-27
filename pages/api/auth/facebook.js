import nextConnect from 'next-connect';
import middleware from '../../../server/middlewares';
import passport from '../../../server/middlewares/passport/passport-facebook';

const handler = nextConnect();
handler.use(middleware);

handler.get(passport.authenticate('facebook', { scope: ['profile', 'email'], session:true }), (req, res, next) => {
  // return our user object
  res.json({ message: 'Logged in successfully with google', user: req.user });
});

export default handler;
