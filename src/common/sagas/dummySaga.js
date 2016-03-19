import { takeEvery } from 'redux-saga';

export default function* mySaga() {
  yield* takeEvery('DUMMY', () => {
    // DO AWESOME
  });
}
