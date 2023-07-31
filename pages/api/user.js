/* eslint-disable */
import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import User from '../../server/models/User';


// create handler for middleware
const handler = nextConnect();
handler.use(middleware);

handler.get((req, res) => {
  try {
    // check to see if user is logged in
    if (req.user) {
      const { firstName, lastName, email, address } = req.user;
      const user = { firstName, lastName, email, address };
      res.json({ isLoggedIn: true, user: user });
    } else {
      // if not, return unauthorized error
      res.status(401).json({ isLoggedIn: false, user: null });
    }
  } catch (err) {
    console.log(err);
  }
});

// update user's address
handler.put(async (req, res) => {
  console.log('Hitting this endpoint')
  try {
    // check to see if user is logged in
    if (req.user) {
      console.log(req.user)
      // get the address from request
      const { state, street, city, zip } = req.body;
      // get the user email
      const { email } = req.user;
      // find user via mongoose model and update address
      await User.updateOne({ email: email }, { address: req.body });
      // redirect user to dashboard
      res.status(200).json({message:'Updated user.'});
    } else {
      // if not, return unauthorized error
      res.status(401).json({ message: 'Unauthorized to update user.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed updating user address.' });
  }
});

export default handler;
