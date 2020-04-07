import {
  getTokenPending,
  getTokenFailure,
  getTokenSuccess,
  initializeUser,
  signupPending,
  signupFailure,
  signupSuccess,
  registerTeamPending,
  registerTeamSuccess,
  registerTeamFailure,
} from "../actions";
import { getTokenAPI, signupAPI, registerTeamAPI } from "../api";

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

export const signup = (username, email, password) => async (dispatch) => {
  try {
    dispatch(signupPending());

    const response = await signupAPI(username, email, password);
    await response.json();

    dispatch(signupSuccess());
  } catch {
    dispatch(signupFailure());
  }
};

export const registerTeam = (
  teamName,
  createdBy,
  location,
  workOnTime,
  workOffTime
) => async (dispatch) => {
  try {
    dispatch(registerTeamPending());

    const response = await registerTeamAPI(
      teamName,
      createdBy,
      location,
      workOnTime,
      workOffTime
    );

    const { result } = await response.json();

    dispatch(registerTeamSuccess(result));
  } catch {
    dispatch(registerTeamFailure());
  }
};
