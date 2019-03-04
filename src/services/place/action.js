import * as actions from "./constants";

export const getPlaces = () => ({
  type: actions.GET_PLACES
});

export const getPlacesSuccess = (places) => ({
  type: actions.GET_PLACES_SUCCESS,
  places: places
});

export const getPlacesError = (error) => ({
  type: actions.GET_PLACES_FAILED,
  error: error
});
