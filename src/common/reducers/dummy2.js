const initialState = {
  dummy2: false
};

const actionsMap = {
  ['DUMMY2']: () => ({dummy2: true})
};

export function dummy2(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if(!reduceFn) return state;

  return {...state, ...reduceFn(state, action)};
}
