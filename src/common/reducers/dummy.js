import { DUMMY } from '../constants/ActionTypes';

const initialState = {
  dummy: false
};

const actionsMap = {
  [DUMMY]: () => ({dummy: true})
};

export function dummy(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if(!reduceFn) return state;

  return {...state, ...reduceFn(state, action)};
}
