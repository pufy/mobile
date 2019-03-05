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

export const getPlacesRecommended = () => ({
  type: actions.GET_PLACES_RECOMMENDED
});

export const getPlacesRecommendedSuccess = (places) => ({
  type: actions.GET_PLACES_RECOMMENDED_SUCCESS,
  placesRecommended: places
});

export const getPlacesRecommendedError = (error) => ({
  type: actions.GET_PLACES_RECOMMENDED_FAILED,
  error: error
});
