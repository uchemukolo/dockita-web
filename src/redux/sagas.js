import { all } from 'redux-saga/effects';
import appSaga from './app/saga';

// eslint-disable-next-line no-unused-vars
export default function* rootSaga(getState) {
  const sagas = [
    appSaga(),
  ];


  yield all(sagas);
}
