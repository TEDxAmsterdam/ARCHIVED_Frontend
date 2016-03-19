import _ from 'lodash';

export default function fetchComponentData(dispatch, routeState) {

  const { components, location, params } = routeState;
  const serversideCalls = components.reduce((prev, current) => {
    if(!current) return prev;
    return (current.needs || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.serversideCalls : []) || [])
      .concat(prev);
  }, []);

  const promises = _.uniq(serversideCalls).map(serversideCall => dispatch(serversideCall({location, routeParams: params})));

  if(_.isEmpty(promises)){
    return Promise.resolve();
  }
  return Promise.all(promises);
}

