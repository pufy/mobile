import * as actions from "./constanst";

export const setClientId = (clientId) => ({
    type: actions.SET_CLIENT_ID,
    clientId: clientId
  });