import { GET_TOKEN_PENDING, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from "../constants"

export const getTokenPending = () => ({ type: GET_TOKEN_PENDING });
export const getTokenSuccess = () => ({ type: GET_TOKEN_SUCCESS });
export const getTokenFailure = () => ({ type: GET_TOKEN_FAILURE });
