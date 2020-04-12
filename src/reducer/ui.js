import {
  WORK_ON_PENDING,
  WORK_ON_SUCCESS,
  WORK_ON_FAILURE,
  WORK_OFF_PENDING,
  WORK_OFF_SUCCESS,
  WORK_OFF_FAILURE,
  INITIALIZE_TEAM,
  UPDATE_CURRENT_PAGE,
} from "../constants";

const initialState = {
  currentPage: "",
  record: {
    isLoading: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WORK_ON_PENDING:
    case WORK_OFF_PENDING:
      return {
        ...state,
        record: {
          isLoading: true,
        },
      };

    case WORK_ON_SUCCESS:
    case WORK_ON_FAILURE:
    case WORK_OFF_SUCCESS:
    case WORK_OFF_FAILURE:
      return {
        ...state,
        record: {
          isLoading: false,
        },
      };

    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
