/* eslint-disable */
import nextConnect from 'next-connect';

// create handler for middleware
const handler = nextConnect();


handler.post((req, res) => {
  res.status(200).send('yeet');

});

export default handler;
