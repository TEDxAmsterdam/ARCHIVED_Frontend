var webpack = require('webpack'),
  parseArgs = require('./parse-args');

module.exports = function(options) {
  return new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __DEVELOPMENT__: process.env.NODE_ENV === 'development',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    __CLIENT__: options.client || !options.server,
    __SERVER__: options.server || !options.client,
    __DEBUG__: parseArgs.getDebug(),
    __PERFORMANCE__: parseArgs.getPerformance(),
    __SSR__: parseArgs.getSSR(),
    __API__: JSON.stringify(parseArgs.getAPI()),
    __STATIC__: JSON.stringify(parseArgs.getStaticPath()),
    __HOST__: JSON.stringify(parseArgs.getHost()),
    __PORT__: parseArgs.getPort()
  });
};
