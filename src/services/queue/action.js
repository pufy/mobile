import * as actions from "./constanst";

export const getQueueSuccess = (queue) => ({
  type: actions.GET_QUEUE_SUCCESS,
  queue
});