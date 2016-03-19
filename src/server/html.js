import React from 'react';
import { renderToString } from 'react-dom/server';

export default ({ component, store, staticPath, noJS }) => {
  const content = renderToString(component);

  const title = <title>TedXAmsterdam</title>;

  const initialState = store ? store.getState() : {};
  const bundle = noJS ? null : <script async src={staticPath + '/bundle.js'}></script>;

  return (
    <html>
    <head lang="en">
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="apple-itunes-app" content="app-id=888975587"/>
      <meta name="google-play-app" content="app-id=nl.rtl.videoland"/>
      {title}
    </head>
    <body>
    <main dangerouslySetInnerHTML={{__html: content}}/>
    <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`}}/>
    {bundle}
    </body>
    </html>
  );
};
