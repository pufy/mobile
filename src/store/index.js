import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas';
import rootReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
  
export const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

