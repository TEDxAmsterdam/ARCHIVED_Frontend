var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.development.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: false,
  noInfo: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true
  }
}).listen(config.devServerPort, config.devServerHost, function errorCallback(err) {
  if(err) {
    console.error(err);
  }

  console.info('==> Webpack development server listening at: ' + config.devServerHost + ':' + config.devServerPort);
});
