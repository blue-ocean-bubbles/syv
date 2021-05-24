import nextConnect from 'next-connect';
import database from './database';
import session from './session';
import passport from 'passport';

const middleware = nextConnect();

middleware
  .use(database)
  .use(session)
  .use(passport)

export default middleware