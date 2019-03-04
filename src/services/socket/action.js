import * as actions from "./constanst";

export const setClientId = (clientId, placeId) => ({
  type: actions.SET_CLIENT_ID,
  clientId: clientId,
  placeId: placeId
});
export const setInstance = (placeId) => ({
  type: actions.SET_INTANCE,
  placeId: placeId
})