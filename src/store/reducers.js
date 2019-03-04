import { combineReducers } from 'redux'
import reducerPlace from '../services/place/reducer'

export default combineReducers({
   places: reducerPlace,
})