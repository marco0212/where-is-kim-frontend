import {
  GET_TOKEN_PENDING,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
  INITIALIZE_USER,
  REGISTER_TEAM_PENDING,
  REGISTER_TEAM_SUCCESS,
  REGISTER_TEAM_FAILURE,
} from "../constants";

export const getTokenPending = () => ({ type: GET_TOKEN_PENDING });
export const getTokenSuccess = () => ({ type: GET_TOKEN_SUCCESS });
export const getTokenFailure = () => ({ type: GET_TOKEN_FAILURE });

export const initializeUser = (user) => ({
  type: INITIALIZE_USER,
  payload: user,
});

export const registerTeamPending = () => ({ type: REGISTER_TEAM_PENDING });
export const registerTeamSuccess = (team) => ({
  type: REGISTER_TEAM_SUCCESS,
  payload: team,
});
export const registerTeamFailure = () => ({ type: REGISTER_TEAM_FAILURE });
