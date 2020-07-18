import express from 'express';
import App from '../components/app';
import CheckSession from '../components/checksession';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

const router = express.Router();

router.get('/', async (req, res) => {
  const theHtml = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

router.post('/', async (req, res) => {
  //before we redirect we will create a session with the posted value
  req.session.inputName = req.body.txtName;
  return res.redirect('/firstssr/checksession');
});

router.get('/checksession', async (req, res) => {
  const theHtml = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <div id="reactele">{{{reactele}}}</div>
  </body>
  </html>
  `;
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<CheckSession />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  console.log(req.session.inputName);
  return res.send(htmlToSend);
});

export default router;
