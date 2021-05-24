import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import User from '../../server/models/User';
// create handler for middleware
const handler = nextConnect();
handler.use(middleware);

// POST api/users
handler.post(async (req, res) => {
  try {
    const {email} = req.body;
    // check if email already exists
    const user = await User.findOne({email: email});
    if (user) {
      // send response that email is already registered
      res.status(403).send('The email has already been used.');
    }
    // else create new user
    const newUser = new User(req.body);
    // save new user
    await newUser.save();
    res.status(201).json({message: 'Saved user.'});
  } catch(err) {
    console.log(err);
    res.status(500).json({message:'Failed saving user.'})
  }
});

export default handler;
