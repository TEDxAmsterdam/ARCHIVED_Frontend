var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var defineEnvPlugin = require('./webpack.plugin.env');
var _ = require('lodash');

var plugins = config.plugins.concat([
  defineEnvPlugin({server: true}),
  new webpack.optimize.DedupePlugin()
]);

var loaders = config.module.loaders.concat([{
  test: /\.js$/,
  loaders: ['babel'],
  include: path.join(__dirname, '..', 'src'),

},{
  test: /\.json/,
  loader: 'json-loader'
}]);

module.exports = _.extend({}, config, {
  entry: './src/common/routes',
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'routes.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    loaders: loaders
  },
  plugins: plugins
});
