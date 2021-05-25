/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../../../server/middlewares';
import passport from '../../../../server/middlewares/passport/passport-google.js'
const handler = nextConnect();
handler.use(middleware);

handler.get(passport.authenticate('google', { session: true }), (req, res, next) => {
  // return our user object
  console.log(req.session,'INSIDE GOOGLE CALLBACK');
  res.json({ message:'Logged in successfully with Google' });
});


export default handler;