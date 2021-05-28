import dotenv from 'dotenv';
import httpMock from 'node-mocks-http';
import handler from '../ballot';

dotenv.config({
  path: `${__dirname}/.env.local`,
});

const postBallot = async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    if (req.user.hasVoted) {
      res.status(400).json({ message: 'user has already voted' });
    }
    const votes = req.body.map((vote) => (
      Tally.updateOne(vote, { $inc: { count: 1 } }, { upsert: true })
    ));
    await Promise.all(votes);
    // eslint-disable-next-line no-underscore-dangle
    await User.updateOne({ _id: req.user._id }, { hasVoted: true });
    res.status(201).json({ message: 'ballot counted' });
  } catch (err) {
    res.status(500).json({ message: 'something went wrong while counting ballot' });
  }
};

describe('/api/ballot', () => {
  const { req, res } = httpMock.createMocks({
    method: 'POST',
  });
  test('returns status code 401 and message: Unauthorized', async () => {
    await postBallot(req, res);
    expect(res._getStatusCode()).toBe(401);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Unauthorized',
      }),
    );
  })


  test('returns status code 500 when invalid information is provided', async () => {
    req.body = {
      hasVoted: true,
    };
    await postBallot(req, res);
    expect(res._getStatusCode()).toBe(500);
  })
});
