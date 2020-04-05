import { GET_TOKEN_PENDING, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE, UPDATE_USER } from '../constants';

export const getTokenPending = () => ({ type: GET_TOKEN_PENDING });
export const getTokenSuccess = () => ({ type: GET_TOKEN_SUCCESS });
export const getTokenFailure = () => ({ type: GET_TOKEN_FAILURE });

export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
