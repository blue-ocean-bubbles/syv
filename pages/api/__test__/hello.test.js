import dotenv from 'dotenv';
import httpMock from 'node-mocks-http';
import handler from '../hello';
dotenv.config({
  path: `${__dirname}/.env.local`,
});

const getSecrets = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    // check to see if user is logged in
    console.log(req.user);
    if (req.user) {
      res.status(200).send({ message: 'Secret information' });
    } else {
      // if not, return unauthorized error
      res.status(401).send({ message: 'Unauthorized.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({});
  }
};

describe('/api/hello', () => {
  test('returns status code 401', async () => {
    const { req, res } = httpMock.createMocks({
      method: 'GET',
    });
    await getSecrets(req, res);
    expect(res._getStatusCode()).toBe(401);
  });
});
