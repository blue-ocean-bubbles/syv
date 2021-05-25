/* eslint-disable */
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
      res.status(401).json({ message: 'Unauthorized'});
      throw 'exception';
    }
    for (const vote of req.body) {
      await Tally.updateOne(vote, { $inc: { count: 1 } }, { upsert: true });
    }
    res.status(201).json({ message: 'ballot counted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'something went wrong while counting ballot' });
  }
});

export default handler;
