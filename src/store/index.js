import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

// import { env_production } from '../config';  
import rootSaga from './sagas';
import rootReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware]
// if (!env_production)
middleware = [...middleware, logger]

export default store = createStore(
    rootReducers,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);