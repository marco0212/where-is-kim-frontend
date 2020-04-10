import {
  getTokenPending,
  getTokenFailure,
  getTokenSuccess,
  initializeUser,
  workOnPending,
  workOnSuccess,
  workOnFailure,
  workOffPending,
  workOffSuccess,
  workOffFailure,
} from "../actions";
import { getTokenAPI, workOnAPI, workOffAPI } from "../api";

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
      dispatch(initializeUser(user));
    } else {
      dispatch(getTokenFailure());
    }
  } catch (err) {
    dispatch(getTokenFailure());
  }
};

export const workOn = (teamId, userId) => async (dispatch) => {
  try {
    dispatch(workOnPending());

    const response = await workOnAPI(teamId, userId);
    await response.json();

    dispatch(workOnSuccess(userId));
  } catch (err) {
    dispatch(workOnFailure());
  }
};

export const workOff = (teamId, userId) => async (dispatch) => {
  try {
    dispatch(workOffPending());

    const response = await workOffAPI(teamId, userId);
    await response.json();

    dispatch(workOffSuccess(userId));
  } catch (err) {
    dispatch(workOffFailure());
  }
};
