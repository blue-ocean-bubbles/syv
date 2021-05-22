import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';

// create handler for middleware
const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
  return res.json({ message: 'Hitting this endpoint' })
});

export default handler;
