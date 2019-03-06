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
export const checkinPlace = (placeId) => ({
  type: actions.CHECKIN_PLACES,
  placeId: placeId
});

export const checkinPlaceSuccess = (data) => ({
  type: actions.CHECKIN_PLACES_SUCCESS,
  data : data
});

export const checkinPlaceError = (error) => ({
  type: actions.CHECKIN_PLACES_FAILED,
  error: error
});
