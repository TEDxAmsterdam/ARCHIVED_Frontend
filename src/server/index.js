var parseArgs = require('../../webpack/parse-args');

global.__SERVER__ = true;
global.__CLIENT__ = false;
global.__SSR__ = true;
global.__STATIC__ = parseArgs.getStaticPath();
global.__HOST__ = parseArgs.getHost();
global.__PORT__ = parseArgs.getPort();
global.__BUNDLEPORT__ = parseArgs.getBundlePort();
global.__DEBUG__ = parseArgs.getDebug();
global.__PERFORMANCE__ = parseArgs.getPerformance();
global.__PRODUCTION__ = parseArgs.getEnvironment() === 'production';
global.__API__ = parseArgs.getAPI();

require('babel-core/register')({
  ignore: /(node_modules|build\/routes)/
});

if(!__PRODUCTION__) {
  require('./server-dev');
} else {
  require('./server');
}
