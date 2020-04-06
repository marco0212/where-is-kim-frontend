import {
  getTokenPending,
  getTokenFailure,
  getTokenSuccess,
  updateUser,
  signupPending,
  signupFailure,
  signupSuccess,
} from "../actions";
import { getTokenAPI, signupAPI } from "../api";

export const getToken = (email, password) => async (dispatch) => {
  try {
    dispatch(getTokenPending());

    const response = await getTokenAPI(email, password);
    const {
      result: { token, user },
    } = await response.json();

    if (token) {
      localStorage.setItem("token", token);
      dispatch(getTokenSuccess());
      dispatch(updateUser(user));
    } else {
      dispatch(getTokenFailure());
    }
  } catch (err) {
    dispatch(getTokenFailure());
  }
};

export const signup = (username, email, password) => async (dispatch) => {
  try {
    dispatch(signupPending());

    const response = await signupAPI(username, email, password);
    const result = await response.json();

    dispatch(signupSuccess());
  } catch {
    dispatch(signupFailure());
  }
};
