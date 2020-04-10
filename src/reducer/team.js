import {
  INITIALIZE_TEAM,
  WORK_ON_SUCCESS,
  WORK_OFF_SUCCESS,
} from "../constants";
import moment from "moment";

const initialState = {
  id: "",
  displayName: "",
  location: {},
  partById: {},
  allpartIds: [],
  allThreadDate: [],
  threadsByDate: {},
  onWorkingUser: [],
  offWorkingUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TEAM:
      const {
        _id: id,
        threads,
        location,
        participants,
        records,
        display_name: displayName,
      } = action.payload;
      const allpartIds = participants.map((part) => part._id);
      const partById = participants.reduce((acc, part) => {
        const { _id: id, username, email } = part;
        acc[id] = { id, username, email };
        return acc;
      }, {});
      const allThreadDate = threads.reduce((acc, thread) => {
        const date = moment(thread.created_at).format("YYYY-MM-DD");
        if (acc.indexOf(date) === -1) {
          acc.push(date);
        }
        return acc;
      }, []);
      const threadsByDate = threads.reduce((acc, thread) => {
        const date = moment(thread.created_at).format("YYYY-MM-DD");
        if (acc[date]) {
          acc[date].push(thread);
        } else {
          acc[date] = [thread];
        }
        return acc;
      }, {});
      const onWorkingUser = [];
      const offWorkingUser = [];

      records
        .filter((record) => {
          const today = moment().format("YYYY-MM-DD");
          return moment(record.work_on).isAfter(today);
        })
        .forEach((record) => {
          if (record.work_off) {
            offWorkingUser.push(record.recorded_by);
          } else {
            onWorkingUser.push(record.recorded_by);
          }
        });

      return {
        ...state,
        id,
        displayName,
        location,
        allpartIds,
        partById,
        allThreadDate,
        threadsByDate,
        onWorkingUser,
        offWorkingUser,
      };
    case WORK_ON_SUCCESS: {
      return {
        ...state,
        onWorkingUser: [...state.onWorkingUser, action.payload],
      };
    }
    case WORK_OFF_SUCCESS: {
      const userId = action.payload;
      const onWorkingUser = state.onWorkingUser.slice();
      const userIdIndex = onWorkingUser.indexOf(userId);

      onWorkingUser.splice(userIdIndex, 1);
      return {
        ...state,
        onWorkingUser,
        offWorkingUser: [...state.offWorkingUser, userId],
      };
    }
    default:
      return {
        ...state,
      };
  }
}
