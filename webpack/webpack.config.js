var path = require('path');
var parseArgs = require('./parse-args');

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'dist', parseArgs.getBuildNumber()),
    filename: 'bundle.js',
    publicPath: parseArgs.getStaticPath() + '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: []
  },
  plugins: []
};
