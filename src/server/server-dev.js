/*eslint no-console: 1*/
import path from 'path';
import Express from 'express';
import compress from 'compression';
import serveStatic from 'serve-static';

import matchRoute from './matchRoute';

const app = new Express();

app.use(compress());
app.use('/stub', serveStatic(path.join(__dirname, '..', '..', 'stub')));

app.use((req, res) => {
  delete require.cache[require.resolve('../../build/routes')];
  const routes = require('../../build/routes');
  matchRoute({req, res, routes, staticPath: `http://${__HOST__}:${__BUNDLEPORT__}`});
});

app.listen(__PORT__, (error) => {
  if(error) {
    console.error(error);
  } else {
    console.info(`==> Listening at ${__HOST__}:${__PORT__}`);
  }
});
