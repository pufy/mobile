import * as actions from "./constanst";
import SocketIOClient from "socket.io-client"
;
const initState = {
  instance: SocketIOClient('http://192.168.1.5:3300/queue', {
    query: "place=2",
    'forceNew': true
    })
}

const reducer = (state = initState, action) => {
    switch (action.type) {
      case actions.SET_CLIENT_ID:
        return { ...state, clientId: action.clientId };
      default:
        return state;
    }
  };
  
  export default reducer;