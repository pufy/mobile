import { put, takeLatest, all, call } from 'redux-saga/effects';

import * as actions from "./constants";
/* import { navigateToPlayer } from '../../navigation/NavigationHelpers'; */

function* fetchPlaces() {
  const data = yield fetch(`https://pufy.ga/v1/place?lat=1.624439&long=-75.604601&range=1000`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (data) yield put({ type: actions.GET_PLACES_SUCCESS, places: data })
  else yield put({ type: actions.GET_PLACES_FAILED, error: data })
}

function* fetchPlacesRecommended() {
  var myHeaders = new Headers();
  var miInit = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYW1lcyI6IkNyaXN0aWFtIiwibGFzdG5hbWVzIjoiRGlheiIsImVtYWlsIjoiY2RpYXpxdHhAZ21haWwuY29tIiwiaWF0IjoxNTUxNjc4NTM4fQ.DvS-RJTc5i4QOtxBWYpAgQ8xKTY6zowwtn6zJ7WNoB4`
    },
    mode: 'cors',
    cache: 'default'
  };
  const data = yield fetch(`https://pufy.ga/v1/place/recommended?lat=1.624439&long=-75.60460`, miInit)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });
    
  if (!data.error)
    yield put({ type: actions.GET_PLACES_RECOMMENDED_SUCCESS, placesRecommended: data });
  else
    yield put({ type: actions.GET_PLACES_RECOMMENDED_FAILED, error: data })
}

function* fetchCheckinPlace(placeId) {
  console.log(placeId);
  var myHeaders = new Headers();
  var miInit = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYW1lcyI6IkNyaXN0aWFtIiwibGFzdG5hbWVzIjoiRGlheiIsImVtYWlsIjoiY2RpYXpxdHhAZ21haWwuY29tIiwiaWF0IjoxNTUxNjc4NTM4fQ.DvS-RJTc5i4QOtxBWYpAgQ8xKTY6zowwtn6zJ7WNoB4`
    },
    mode: 'cors',
    cache: 'default'
  };
  const data = yield fetch(`https://pufy.ga/v1/place/${placeId}/checkin`, miInit)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });
  if (!data.error)
    yield put({ type: actions.CHECKIN_PLACES_SUCCESS, data: data });
  else
    yield put({ type: actions.CHECKIN_PLACESD_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_PLACES, fetchPlaces)
  yield takeLatest(actions.GET_PLACES_RECOMMENDED, fetchPlacesRecommended)
  yield takeLatest(actions.CHECKIN_PLACES, fetchCheckinPlace)
}


export default function* GetPlaceSaga() {
  yield all([
    ActionWatcher(),
  ]);
}