/*eslint no-console: 1*/
export default function createNodeLogger() {
  return () => next => action => {
    const returnValue = next(action);
    if(action.error) {
      console.error(action.type);
      console.error('> Error: ' + action.error);
      console.error('> Status: ' + action.status);
      console.error('> Payload: ' + JSON.stringify(action.originalPayload));
    } else {
      console.log(action.type, action.payload && action.payload.url ? `(${action.payload.url})` : '');
    }
    return returnValue;
  };
}
