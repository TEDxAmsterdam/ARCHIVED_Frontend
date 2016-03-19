import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../common/configureStore';
import fetchComponentData from './fetchComponentData';
import createNodeLogger from './logger';

import Html from './html';
import ErrorPage from './error';

const logger = createNodeLogger();

export default function matchRoute({req, res, routes, staticPath}) {

  const memoryHistory = createMemoryHistory(req.path);
  const store = configureStore({}, {history: memoryHistory, logger});
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location: req.url }, (err, redirectInfo, routeState) => {

    if(redirectInfo && redirectInfo.redirectInfo) {
      res.redirect(redirectInfo.path);
    } else if(err) {
      res.error(err.message);
    } else {

      if(routeState) {

        const statusCode = !routeState.params.splat ? 200 : 404;

        if(__SSR__) {
          fetchComponentData(store.dispatch, routeState)
            .then(() => {
              const component = <Provider store={store}><RouterContext {...routeState}/></Provider>;

              res.set({'Cache-Control': 'public, max-age=600, no-transform'});
              res.status(statusCode).send('<!doctype html>' + renderToStaticMarkup(<Html component={component} store={store} staticPath={staticPath}/>));
            })
            .catch(err => {
              const errorPage = <ErrorPage message={err.message}/>;
              res.set({'Cache-Control': 'public, max-age=60, no-transform'});
              res.status(500).send('<!doctype html>' + renderToStaticMarkup(<Html component={errorPage} staticPath={staticPath} noJS/>));
            });
        } else {
          const component = <Provider store={store}><RouterContext {...routeState} /></Provider>;
          res.set({'Cache-Control': 'public, max-age=60, no-transform'});
          res.status(statusCode).send('<!doctype html>' + renderToStaticMarkup(<Html component={component} store={store} staticPath={staticPath}/>));
        }
      } else {
        res.set({'Cache-Control': 'public, max-age=3600, no-transform'});
        res.sendStatus(404);
      }
    }
  });
}
