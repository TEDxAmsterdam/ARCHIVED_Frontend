import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { IDEAS, HOME} from '../constants/Routes';

const RouteLogic = {
  [HOME]: payload => console.log('Awesome home stuff', payload),
  [IDEAS]: payload => console.log('Awesome Ideas stuff', payload)

}

export default function* mySaga() {
  yield* takeEvery(LOCATION_CHANGE, action => {
    // Do some sort of AJAX request or fancy stuff that belongs to a certain route
    RouteLogic[action.payload.pathname](action.payload);
  });
}
