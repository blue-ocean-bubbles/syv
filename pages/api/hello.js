import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';
import User from '../../server/models/User';
// create handler for middleware
const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
  // console.log(User.find({}) ,'user')
  return res.json({ message: 'Hitting this endpoint' })
});

export default handler;
