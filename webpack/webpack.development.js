var path = require('path'),
  webpack = require('webpack'),
  config = require('./webpack.config.js'),
  defineEnvPlugin = require('./webpack.plugin.env'),
  parseArgs = require('./parse-args'),
  _ = require('lodash'),
  host = parseArgs.getHost(),
  port = parseArgs.getBundlePort();

var plugins = config.plugins.concat([
  defineEnvPlugin({client: true}),
  new webpack.HotModuleReplacementPlugin()
]);

var entry = config.entry.concat([
  'webpack-dev-server/client?http://' + host + ':' + port,
  'webpack/hot/only-dev-server'
]);

var loaders = config.module.loaders.concat([{
  test: /\.js$/,
  loaders: ['babel'],
  include: path.join(__dirname, '..', 'src')
}]);

var output = config.output || {};
output.publicPath = 'http://' + host + ':' + port + '/';

module.exports = _.extend({}, config, {
  entry: entry,
  output: output,
  devServerHost: host,
  devServerPort: port,
  module: {
    loaders: loaders
  },
  plugins: plugins
});
