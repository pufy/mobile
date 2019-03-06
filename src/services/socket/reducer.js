import * as actions from "./constants";

const reducerSocket = (state = {}, action) => {
  switch (action.type) {
    case actions.CONNECT_CLIENT_ID:
    return { ...state, placeId: action.placeId };
    
    case actions.CONNECT_CLIENT_ID_SUCCESS:
      return { ...state, socket: action.socket};
    default:
      return state;
  }
};

export default reducerSocket;