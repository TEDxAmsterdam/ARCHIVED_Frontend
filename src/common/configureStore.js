import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import sagas from './sagas/routeSaga';

const sagaMiddleware = createSagaMiddleware(sagas);

const reducer = combineReducers({...reducers, routing: routerReducer});

export default function configureStore(initialState, {history, logger}) {

  const middlewares = [applyMiddleware(routerMiddleware(history), ...sagaMiddleware)];

  if(__DEBUG__) {
    if(logger) middlewares.push(applyMiddleware(logger));
  }

  const createStoreWithMiddleware = compose(...middlewares)(createStore);

  return createStoreWithMiddleware(reducer, initialState);
}
