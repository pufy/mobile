import { put, takeLatest, all } from 'redux-saga/effects';
import SocketIOClient from "socket.io-client";

import * as actions from "./constants";

function* fetchConnect(data) {
  let instance = SocketIOClient('https://pufy.ga/queue', {
      query: `place=${data.placeId}`,
      'forceNew': true
  });

  yield put({ type: actions.CONNECT_CLIENT_ID_SUCCESS, socket: instance });
}

function* ActionWatcher() {
  yield takeLatest(actions.CONNECT_CLIENT_ID, fetchConnect)
}

export default function* SocketSaga() {
  yield all([
    ActionWatcher(),
  ]);
}