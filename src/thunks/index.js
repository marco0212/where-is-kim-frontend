import { getTokenPending, getTokenFailure, getTokenSuccess } from '../actions';
import { getTokenAPI } from "../api";

export const getToken = (email, password) => async (dispatch) => {
  try {
    dispatch(getTokenPending());

    const response = await getTokenAPI(email, password);
    const { token } = await response.json();

    if (token) {
      dispatch(getTokenSuccess());
    } else {
      dispatch(getTokenFailure());
    }
  } catch (err) {
    dispatch(getTokenFailure());
  }
};
