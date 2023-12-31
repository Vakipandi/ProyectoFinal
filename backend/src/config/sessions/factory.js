import args from '../arguments.js';
import expressSession from 'express-session';
import sessionFileStore from 'session-file-store';
import { connect } from 'mongoose';
import MongoStore from 'connect-mongo';
import env from '../env.js';
import { MongoClient } from 'mongodb';
import __dirname from '../../utils.js';

let sessions = null;

switch (args.persistence) {
  case 'FS':
    const FileStore = sessionFileStore(expressSession);
    sessions = expressSession({
      store: new FileStore({
        path: `${__dirname}/config/sessions/files`,
        ttl: 60 * 60 * 24 * 7,
        retries: 0,
      }),
      secret: env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
    });
    break;

  default:
    sessions = expressSession({
      store: MongoStore.create({
        mongoUrl: env.DB_CONNECTION,
        ttl: 60 * 60 * 24 * 7,
      }),
      secret: env.SECRET_SESSION,
      resave: true,
      saveUninitialized: false,
    });
    break;
}

export default sessions;
