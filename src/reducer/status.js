import {
  GET_TOKEN_PENDING,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../constants";

const initialState = {
  isLogin: false,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
      };
    case GET_TOKEN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case SIGNUP_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
