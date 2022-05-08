import {all, put, takeLatest} from "redux-saga/effects";
import actions from "../actions/actions";

function* increment() {
  try {
    yield put({type: actions.INCREMENT.SUCCESS});
  } catch (e) {
    yield put({type: actions.INCREMENT.FAILURE});
  }
}
function* incrementByNumber(action) {
  const {value} = action.payload;
  try {
    yield put({type: actions.INCREMENT_BY_NUMBER.SUCCESS, payload: {value}});
  } catch (e) {
    yield put({type: actions.INCREMENT_BY_NUMBER.FAILURE, payload: {value}});
  }
}
function* decrement() {
  try {
    yield put({type: actions.DECREMENT.SUCCESS});
  } catch (e) {
    yield put({type: actions.DECREMENT.FAILURE});
  }
}
function* decrementByNumber(action) {
  const {value} = action.payload
  try {
    yield put({type: actions.DECREMENT_BY_NUMBER.SUCCESS,payload: {value}});
  } catch (e) {
    yield put({type: actions.DECREMENT_BY_NUMBER.FAILURE,payload: {value}});
  }
}

export default function* sagas() {
  yield all([
    takeLatest(actions.INCREMENT.REQUEST, increment),
    takeLatest(actions.DECREMENT.REQUEST, decrement),
    takeLatest(actions.INCREMENT_BY_NUMBER.REQUEST, incrementByNumber),
    takeLatest(actions.DECREMENT_BY_NUMBER.REQUEST, decrementByNumber),
  ]);
}
