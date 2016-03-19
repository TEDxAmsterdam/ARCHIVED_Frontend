import { DUMMY } from '../constants/ActionTypes';

const fetchDummy = () => ({
  type: DUMMY
});

export const loadDummy = () => (dispatch) => {
  return dispatch(fetchDummy());
};
