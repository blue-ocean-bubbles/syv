import dotenv from 'dotenv';
import httpMock from 'node-mocks-http';
import handler from '../user';

dotenv.config({
  path: `${__dirname}/.env.local`,
});

const getUser = async (req, res) => {
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
}

const putUser = async (req, res) => {
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
      res.status(204).json({message:'Updated user.'});
    } else {
      // if not, return unauthorized error
      res.status(401).json({ message: 'Unauthorized to update user.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed updating user address.' });
  }
}

describe('/api/user', () => {
  const { req, res } = httpMock.createMocks({
    method: 'GET',
  });
  test('returns status code 401 if user is not signed in', async () => {
    await getUser(req, res);
    expect(res._getStatusCode()).toBe(401);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        isLoggedIn: false,
        user: null,
      }),
    );
  })
})

describe('/api/user', () => {
  const { req, res } = httpMock.createMocks({
    method: 'PUT',
  });
  test('returns status code 401 if user is not signed in', async () => {
    await putUser(req, res);
    expect(res._getStatusCode()).toBe(401);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Unauthorized to update user.',
      }),
    );
  })
})