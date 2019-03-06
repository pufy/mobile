import * as actions from "./constanst";
import SocketIOClient from "socket.io-client";
const initState = {
  instance: SocketIOClient('https://pufy.ga/queue', {
    query: "place=2",
    'forceNew': true
  })
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_CLIENT_ID:
      return { ...state, clientId: action.clientId, placeId: action.placeId };
    case actions.SET_INTANCE:
      return { ...state, placeId: action.placeId };
    default:
      return state;
  }
};

export default reducer;