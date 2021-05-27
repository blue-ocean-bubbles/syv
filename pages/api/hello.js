import nextConnect from 'next-connect';
import middleware from '../../server/middlewares';

const handler = nextConnect();
handler.use(middleware);

handler.get((req, res) => {
  console.log('hit')
  try {
    
  } catch (err) {
    console.log(err);
  }
});