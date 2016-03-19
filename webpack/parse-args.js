var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2)),
  basePath = argv.basePath || '/static',
  buildNumber = process.env.BUILD_NUMBER || '1',
  pathPrefix = (basePath + '/' + buildNumber).replace(/\/\//, '/'),
  environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'production',
  port = argv.port || 3000,
  bundlePort = argv.bundlePort || 8080,
  host = argv.host || 'localhost',
  isDebug = argv.debug || false,
  isPerformance = argv.performance || false,
  isSSR = argv.ssr === undefined ? true : argv.ssr,
  api = argv.api || 'production';

module.exports.getStaticPath = function() {
  return pathPrefix;
};

module.exports.getPort = function() {
  return port;
};

module.exports.getBundlePort = function() {
  return bundlePort;
};

module.exports.getSSR = function() {
  return isSSR;
};

module.exports.getDebug = function() {
  return isDebug;
};

module.exports.getPerformance = function() {
  return isPerformance;
};

module.exports.getAPI = function() {
  return api;
};

module.exports.getEnvironment = function() {
  return environment;
};

module.exports.getBuildNumber = function() {
  return buildNumber;
};

module.exports.getHost = function() {
  return host;
};
