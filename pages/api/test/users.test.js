import dotenv from 'dotenv';
import httpMock from 'node-mocks-http';
import handler from '../users';
import User from '../../../server/models/User';

dotenv.config({
  path: `${__dirname}/.env.local`,
});

jest.setTimeout(10000)

const postUsers = async (req, res) => {
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
}

describe('/api/users', () => {
  const { req, res } = httpMock.createMocks({
    method: 'POST',
    body: {
      email: 'test@gmail.com',
      password: null,
    },
  })
  test("returns status code 400 and message: 'Please provide password.' if no password is passed in", async () => {
    await postUsers(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Please provide password.',
      }),
    );
  })
})