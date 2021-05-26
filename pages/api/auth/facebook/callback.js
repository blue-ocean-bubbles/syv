/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../../../server/middlewares';
import passport from '../../../../server/middlewares/passport/passport-facebook.js'
const handler = nextConnect();
handler.use(middleware);

handler.get(passport.authenticate('facebook', { session: true }), (req, res, next) => {
  // return our user object
  console.log(req.session,'INSIDE FB CALLBACK');
  res.redirect('/dashboard').json({ message:'Logged in successfully with Facebook' });
});


export default handler;