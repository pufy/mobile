import * as actions from "./constanst";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_QUEUE_SUCCESS:
      return { ...state, queue: (Array.isArray(action.queue) || !action.queue ? action.queue: [...state.queue, action.queue]) };
    default:
      return state;
  }
};

export default reducer;
