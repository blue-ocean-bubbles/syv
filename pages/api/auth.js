import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import passport from '../../server/middlewares/passport/passport-local';
const handler = nextConnect();
handler.use(middleware);

handler.post(passport.authenticate('local'), (req, res) => {
  // return our user object
  console.log(req.user);
  res.json({ message:'Logged in successfully' });
});

export default handler;