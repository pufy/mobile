import * as actions from "./constants";

export const connectClientId = ( placeId) => ({
  type: actions.CONNECT_CLIENT_ID,
  placeId: placeId
});

export const connectClientIdSuccess = (socket) => ({
  type: actions.CONNECT_CLIENT_ID_SUCCESS,
  socket: socket
});
