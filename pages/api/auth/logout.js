import nextConnect from 'next-connect';
import middleware from '../../../server/middlewares';

const handler = nextConnect();
handler.use(middleware);

// GET /api/auth/logout
handler.get((req, res) => {
  // destroy session
  req.session.destroy(() => {
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

export default handler;
