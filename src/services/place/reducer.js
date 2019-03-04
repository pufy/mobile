import * as actions from "./constants";

const reducerPlace = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_PLACES:
      return { ...state, loading: true };
    case actions.GET_PLACES_SUCCESS:
      return { ...state, loading: false, places: action.places };
    case actions.GET_PLACES_FAILED:
      return { ...state, getPlaces: false, error: action.error };
    default:
      return state;
  }
};

export default reducerPlace;
