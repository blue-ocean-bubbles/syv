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
    for (const vote of req.body.votes) {
      await Tally.updateOne(vote, { $inc: { count: 1 } }, { upsert: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'not tubular' });
  }
});

export default handler;
