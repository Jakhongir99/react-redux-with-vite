import {all} from 'redux-saga/effects';
import Counter from "./Counter";


export default function* sagas() {
  yield all([
    Counter(),
  ]);
}
