import { INITIALIZE_TEAM } from "../constants";

const initialState = {
  displayName: "",
  partById: {},
  allpartIds: [],
  threadById: {},
  allThreadIds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TEAM:
      const {
        threads,
        participants,
        display_name: displayName,
      } = action.payload;
      const allpartIds = participants.map((part) => part._id);
      const partById = participants.reduce((acc, part) => {
        const { _id: id, username, email } = part;
        acc[id] = { id, username, email };
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
        displayName,
        allpartIds,
        partById,
        allThreadIds,
        threadById,
      };
    default:
      return {
        ...state,
      };
  }
}
