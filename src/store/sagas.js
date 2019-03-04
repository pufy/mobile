import { fork, all } from 'redux-saga/effects';
/* import voteSaga from '../services/vote/saga'; */

export default function* rootSaga () {
    yield all([
/*         fork(voteSaga) */
    ]);
}