import { getTokenPending, getTokenFailure, getTokenSuccess, updateUser } from '../actions';
import { getTokenAPI } from "../api";

export const getToken = (email, password) => async (dispatch) => {
  try {
    dispatch(getTokenPending());

    const response = await getTokenAPI(email, password);
    const { result: { token, user } } = await response.json();

    if (token) {
      localStorage.setItem('token', token);
      dispatch(getTokenSuccess());
      dispatch(updateUser(user));
    } else {
      dispatch(getTokenFailure());
    }
  } catch (err) {
    dispatch(getTokenFailure());
  }
};
