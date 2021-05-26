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
      res.json({ isLoggedIn: true });
    } else {
      // if not, return unauthorized error
      res.status(401).json({ isLoggedIn: false });
    }
  } catch (err) {
    console.log(err);
  }

});

export default handler;
