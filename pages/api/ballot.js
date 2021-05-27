import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import Tally from '../../server/models/Tally';

// create handler for middleware
const handler = nextConnect();
handler.use(middleware);

// POST api/ballot
handler.post(async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    const votes = req.body.map((vote) => (
      Tally.updateOne(vote, { $inc: { count: 1 } }, { upsert: true })
    ));
    await Promise.all(votes);
    res.status(201).json({ message: 'ballot counted' });
  } catch (err) {
    res.status(500).json({ message: 'something went wrong while counting ballot' });
  }
});

export default handler;
