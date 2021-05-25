/* eslint-disable */
import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';
import middleware from '../../server/middlewares';
import User from '../../server/models/User';
// create handler for middleware
const handler = nextConnect();
handler.use(middleware);

// POST api/users
handler.post(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      res.status(400).json({ message: 'Please provide password.' })
    }
    // check if email already exists
    const user = await User.findOne({ email: email });
    if (user) {
      // send response that email is already registered
      res.status(403).send('The email has already been used.');
    }
    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    // else create new user
    const newUser = new User(req.body);
    // save new user
    await newUser.save();
    res.status(201).json({ message: 'Saved user.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed saving user.' })
  }
});

export default handler;
