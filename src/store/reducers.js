import { combineReducers } from 'redux'
import reducerPlace from '../services/place/reducer'
import reducerSocket from '../services/socket/reducer'
import queue from '../services/queue/reducer'

export default combineReducers({
   places: reducerPlace,
   socket: reducerSocket,
   queue,
})