import express, { json, urlencoded } from 'express';
import http from 'http';
import { config } from 'dotenv';
import cors from 'cors';
import Debug from 'debug';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import Morgan from 'morgan';
// import passport from 'passport';
// import GoogleStrategy from 'passport-google-oauth20';
// import session from 'express-session';

import routes from './routes';
import swaggerDoc from '../docs/swagger.json';
import errorHandler from './middlewares/errorHandler';
// import socketIO from './socket';
// import './services/cron';
config();

const debug = Debug('dev');
const { PORT } = process.env;
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(Morgan('dev'));
app.use(passport.initialize());
app.use('/api/v1', routes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (request, response) => {
  response.status(200).json({
    status: 'success',
    message: 'Welcome to connect',
  });
});

app.all('*', (request, response) => {
  response.status(404).json({
    status: 'error',
    error: 'Not Found',
  });
});

app.use(errorHandler);

const server = http.createServer(app);

// socketIO(server);

server.listen(PORT, () => debug(`Server started on port ${PORT}`));

export default server;
