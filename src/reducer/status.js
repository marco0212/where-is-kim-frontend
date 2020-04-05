import { GET_TOKEN_PENDING, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from "../constants";

const initialState = {
  isLogin: false,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true
      };
    case GET_TOKEN_FAILURE:
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
}