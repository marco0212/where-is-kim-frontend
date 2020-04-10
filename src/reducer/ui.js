import {
  WORK_ON_PENDING,
  WORK_ON_SUCCESS,
  WORK_ON_FAILURE,
  INITIALIZE_TEAM,
} from "../constants";

const initialState = {
  record: {
    isLoading: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WORK_ON_PENDING:
      return {
        ...state,
        record: {
          isLoading: true,
        },
      };
    case WORK_ON_SUCCESS || WORK_ON_FAILURE:
      return {
        ...state,
        record: {
          isLoading: false,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
