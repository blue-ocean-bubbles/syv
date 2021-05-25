/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../../server/middlewares';
import passport from '../../../server/middlewares/passport/passport-local';
const handler = nextConnect();
handler.use(middleware);

// POST /api/auth/local
handler.post(passport.authenticate('local'), (req, res) => {
  // return our user object
  delete req.user.password;
  res.json({ message: 'Logged in successfully locally', user: req.user });
});

export default handler;