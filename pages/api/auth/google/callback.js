/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../../../server/middlewares';
import passport from '../../../../server/middlewares/passport/passport-google.js'
const handler = nextConnect();
handler.use(middleware);

handler.get(passport.authenticate('google', { session: true }), (req, res, next) => {
  // return our user object
  const { user } = req;
  const street = user.address.street || null;
  const city = user.address.city || null;
  const state = user.address.state || null;
  const zip = user.address.zip || null;
  // check if the google user has an address associated with account
  if(!street || !state || !city || !zip) {
    res.redirect('/address-form');
  } else {
    res.redirect('/dashboard').json({ message: 'Logged in successfully with Google' });
  }
});


export default handler;