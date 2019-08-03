
import {
    SET_GOALS,
    API,
    FETCH_GOALS
} from './types';

export function fetchGoals() {
  return apiAction({
    url: "/goals",
    onSuccess: (data) => {
        return {
          type: SET_GOALS,
          payload: data
        }
    },
    onFailure: () => {
        console.log("Error occured loading goals")
    },
    label: FETCH_GOALS
  });
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
