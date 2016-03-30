import _ from 'lodash';

const environment = __API__;

const endpoints = {
  development: {
    dummy: '/stub/dummy.json'
  },
  production: {
    dummy: '/api/dummy'
  }
};

for(let key in endpoints) {
  if(key !== 'production') {
    endpoints[key] = _.defaults(endpoints[key], endpoints.production);
  }
}

function getHost() {
  return endpoints[environment].host;
}

export function getEndpointUrl(endpoint, replacements) {
  let path = endpoints[environment][endpoint];
  for(let key in replacements) {
    const replacement = replacements[key] == null ? '' : replacements[key];
    path = path.replace('${' + key + '}', replacement);
  }
  return getHost(path) + path;
}
