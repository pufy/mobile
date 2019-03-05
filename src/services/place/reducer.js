import * as actions from "./constants";

const reducerPlace = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_PLACES:
      return { ...state, loading: true };
    case actions.GET_PLACES_SUCCESS:
      return { ...state, loading: false, places: action.places };
    case actions.GET_PLACES_FAILED:
      return { ...state, getPlaces: false, error: action.error };
    case actions.GET_PLACES_RECOMMENDED:
      return { ...state, loading: true };
    case actions.GET_PLACES_RECOMMENDED_SUCCESS:
      return { ...state, loading: false, placesRecommended: action.placesRecommended };
    case actions.GET_PLACES_RECOMMENDED_FAILED:
      return { ...state, getPlaces: false, error: action.error };
    default:
      return state;
  }
};

export default reducerPlace;
