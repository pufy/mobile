import { fork, all } from 'redux-saga/effects';
import GetPlaceSaga from '../services/place/saga';

export default function* rootSaga() {
    yield all([
        fork(GetPlaceSaga),
    ]);
}