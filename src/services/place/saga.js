import { put, takeLatest, all } from 'redux-saga/effects';

import * as actions from "./constants";

function* fetchPlaces() {
  const data = yield fetch(`http://192.168.1.5:3300/v1/place?lat=1.624439&long=-75.604601&range=2000`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_PLACES_SUCCESS, places: data });
  else
    yield put({ type: actions.GET_PLACES_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_PLACES, fetchPlaces)
}


export default function* GetPlaceSaga() {
  yield all([
    ActionWatcher(),
  ]);
}