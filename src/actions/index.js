import {
  GET_TOKEN_PENDING,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
  INITIALIZE_USER,
  REGISTER_TEAM_PENDING,
  UPDATE_USER_TEAM,
  REGISTER_TEAM_FAILURE,
  INITIALIZE_TEAM,
  WORK_ON_PENDING,
  WORK_ON_SUCCESS,
  WORK_ON_FAILURE,
  WORK_OFF_PENDING,
  WORK_OFF_SUCCESS,
  WORK_OFF_FAILURE,
  UPDATE_ACTIVE_USERS,
  UPDATE_THREADS,
  UPDATE_CURRENT_PAGE,
  UPDATE_RECORDS,
} from "../constants";

export const getTokenPending = () => ({ type: GET_TOKEN_PENDING });
export const getTokenSuccess = () => ({ type: GET_TOKEN_SUCCESS });
export const getTokenFailure = () => ({ type: GET_TOKEN_FAILURE });

export const initializeUser = (user) => ({
  type: INITIALIZE_USER,
  payload: user,
});

export const initializeTeam = (team) => ({
  type: INITIALIZE_TEAM,
  payload: team,
});

export const registerTeamPending = () => ({ type: REGISTER_TEAM_PENDING });
export const updateUserTeam = (team) => ({
  type: UPDATE_USER_TEAM,
  payload: team,
});
export const registerTeamFailure = () => ({ type: REGISTER_TEAM_FAILURE });

export const workOnPending = () => ({ type: WORK_ON_PENDING });
export const workOnSuccess = (userId) => ({
  type: WORK_ON_SUCCESS,
  payload: userId,
});
export const workOnFailure = () => ({ type: WORK_ON_FAILURE });

export const workOffPending = () => ({ type: WORK_OFF_PENDING });
export const workOffSuccess = (userId) => ({
  type: WORK_OFF_SUCCESS,
  payload: userId,
});
export const workOffFailure = () => ({ type: WORK_OFF_FAILURE });

export const updateActiveUsers = (ids) => ({
  type: UPDATE_ACTIVE_USERS,
  payload: ids,
});

export const updateThreads = (threads) => ({
  type: UPDATE_THREADS,
  payload: threads,
});

export const updateCurrentPage = (page) => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});

export const updateRecords = (records) => ({
  type: UPDATE_RECORDS,
  payload: records,
});
