import { INITIALIZE_TEAM } from "../constants";
import moment from "moment";

const initialState = {
  id: "",
  displayName: "",
  location: {},
  partById: {},
  allpartIds: [],
  threadById: {},
  allThreadIds: [],
  allThreadDate: [],
  threadsByDate: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TEAM:
      const {
        _id: id,
        threads,
        location,
        participants,
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
      const allThreadIds = threads.map((thread) => thread._id);
      const threadById = threads.reduce((acc, thread) => {
        const {
          _id: id,
          text,
          comments,
          likes,
          created_by: { username },
          created_at: createdAt,
        } = thread;
        acc[id] = { id, text, comments, likes, createdBy: username, createdAt };
        return acc;
      }, {});

      return {
        ...state,
        id,
        displayName,
        location,
        allpartIds,
        partById,
        allThreadIds,
        allThreadDate,
        threadById,
        threadsByDate,
      };
    default:
      return {
        ...state,
      };
  }
}
