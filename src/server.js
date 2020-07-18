import express from 'express';
import compression from 'compression';
import ssr from './routes/ssr';
import { redisSession } from './configuration/session/redis';
import https from 'https';
import fs from 'fs';

const app = express();

//This is optional and is used to trust first level proxy
app.set('trust proxy', 1);

app.use(compression());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(redisSession);

app.use('/firstssr', ssr);

const port = process.env.PORT || 3030;
https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    },
    app
  )
  .listen(port, () => {
    console.info(`Running on HTTPS Port ${port}`);
  });
