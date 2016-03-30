# Implementation Details

## Frameworks/libraries used

* [React](http://facebook.github.io/react/docs/getting-started.html)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [Redux](http://rackt.github.io/redux/)
* [Redux sagas](http://yelouafi.github.io/redux-saga/)
* [lodash](https://lodash.com/docs)

## Global Variables

### Description

```
__PRODUCTION__    # (bool) NODE_ENV === 'production'
__DEVELOPMENT__   # (bool) NODE_ENV === 'development'
__CLIENT__        # (bool) Browser environment (use redux-devtools, sessionStorage, cookies)
__SERVER__        # (bool) Server environment (i.e. Node)
__DEBUG__         # (bool) Use React debug version, inject redux-logger and redux-devtools
__PERFOMANCE__    # (bool) Use React Perfomance tooling version, inject react-addons-perf
__SSR__           # (bool) Pre-render HTML, client skips initial content XHR, use "browser" (not "hash") history
__API__           # (string) Use 'stubs', 'test' (test.videoland.com), or 'production' (prod.videoland.com)
__STATIC__        # (string) Path to static assets (e.g. '/static')
```

### Where/how to set

* `__PRODUCTION__ `: Set `NODE_ENV` to `"production"` (default: `"production"`).
* `__CLIENT__`: Automatically set to `true` in `webpack.build.client.js` and in `webpack.development.js`. (may change in new setup)
* `__SERVER__ `: Automatically set to `true` in `webpack.build.server.js` and in `src/server/index.js`. (may change in new setup)
* `__DEBUG__`: Use `--debug` from CLI (default: `false`)
* `__PERFORMANCE__`: Use `--performance` from CLI (default: `false`)
* `__SSR__`: Use `ssr` (or `--no-ssr`) from CLI (default: `true`). Set in state as `application.SSR`.
* `__API__`: Use `--api=[env]` from CLI (default: `production`). Used in `src/common/config.js`.
* `__STATIC__`: Use `--basePath=[path]` from CLI (default: `/static`).

Also see `package.json` for npm scripts to run from CLI, and the `/webpack` folder.

### Notes on `__PRODUCTION__`:

t.b.d.

## Components

* The containers in `./containers` are "smart components"
    * Use `@connect` to inject state as props.
    * Render dumb components and pass the props they need.
* The components in `./components` are "dumb components" (will maybe move to different project)

## Sagas

t.b.d.

## Performance Tooling

React provides us with a tooling project of their own. It will give an overview of your app's overall performance.
React has a very detailed page about the tooling which you can find here [Performance Tooling](https://facebook.github.io/react/docs/perf.html);

### Usage

You start the application with the `--perfomance` flag. This will expose a `Perf` Object on the `window`. 
From here on you can start your performance measurement with `Perf.start()` and `Perf.stop()`;

You can fetch the measurements by running the following code: `Perf.getLastMeasurements()`. 
This is the result you must pass into the various printers/loggers described on the link stated above.


