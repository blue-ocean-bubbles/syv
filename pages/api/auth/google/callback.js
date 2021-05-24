/* eslint-disable */

import nextConnect from 'next-connect';
import middleware from '../../../../server/middlewares';
import passport from '../../../../server/middlewares/passport/passport-google.js'
const handler = nextConnect();
handler.use(middleware);

console.log(passport);

handler.get(passport.authenticate('google'), (req, res, next) => {
  // return our user object
  console.log(req.user);
  res.json({ message:'Logged in successfully' });
});


export default handler;