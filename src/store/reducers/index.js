import {
    SET_GOALS,
    FETCH_GOALS,
    API_START,
    API_END,
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_GOALS:

      return {
          data: action.payload.data
      };
    case API_START:
      if (action.payload === FETCH_GOALS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_GOALS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
