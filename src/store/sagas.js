import { fork, all } from 'redux-saga/effects';
import GetPlaceSaga from '../services/place/saga';
import SocketSaga from '../services/socket/saga';

export default function* rootSaga() {
    yield all([
        fork(GetPlaceSaga),
        fork(SocketSaga)
    ]);
}