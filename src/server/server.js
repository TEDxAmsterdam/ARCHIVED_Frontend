/*eslint no-console: 1*/
import Express from 'express';
import compress from 'compression';

import matchRoute from './matchRoute';

const routes = require('../../build/routes');

const app = new Express();

app.use(compress());

app.use((req, res) => {
  matchRoute({req, res, routes, staticPath: __STATIC__});
});

app.listen(__PORT__, (error) => {
  if(error) {
    console.error(error);
  } else {
    console.info(`==> Listening on port ${__PORT__}.`);
  }
});
