# Development

Run the following commands in separate terminal tabs/windows:

```
npm run client -- [opts]
npm run watch:server -- [opts]
NODE_ENV=development npm start
```

The application server is now running at http://localhost:[portnumber].

## Options

### --api

Value: one of `development`, or `production` (default `production`)

### --debug

Add this option to enable debug mode. (default `false`)

### --performance

To enable the [React perfomance tools](https://facebook.github.io/react/docs/perf.html) (default `false`)

### --port

To set the port of the server (e.g. http://localhost:9000) (default `3000`)

### --ssr

To enable/disable server side rendering (default `true`)

### --host

To run the application over an alternative host e.g. `--host=168.192.0.10` (default `localhost`)

## Example

To enable debug mode everywhere and use the stubs:

```
npm run client -- --debug --performance --api=development
npm run watch:server -- --debug --api=development
NODE_ENV=development npm start
```
