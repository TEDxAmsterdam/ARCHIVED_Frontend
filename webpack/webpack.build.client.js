var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config.js');
var defineEnvPlugin = require('./webpack.plugin.env');
var _ = require('lodash');

var envPlugin = defineEnvPlugin({client: true});

var plugins = config.plugins.concat([
  envPlugin,
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

var loaders = config.module.loaders.concat([{
  test: /\.js$/,
  loaders: ['babel'],
  include: path.join(__dirname, '..', 'src')
}]);

module.exports = _.extend({}, config, {
  module: {
    loaders: loaders
  },
  plugins: plugins
});
