import { INITIALIZE_TEAM } from "../constants";

const initialState = {
  name: "",
  allpartsId: [],
  partById: {},
  allThreadId: [],
  threadById: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TEAM:
      const { threads, participants, display_name: name } = action.payload;
      const allpartsId = participants.map((part) => part._id);
      const partById = allByCreator(participants);
      const allThreadId = threads.map((thread) => thread._id);
      const threadById = allByCreator(threads);

      return {
        ...state,
        name,
        allpartsId,
        partById,
        allThreadId,
        threadById,
      };
    default:
      return {
        ...state,
      };
  }
}
function allByCreator(arr) {
  return arr.reduce((acc, ele) => {
    const { _id: id } = ele;
    acc[ele._id] = { ...ele, id };
    return acc;
  }, {});
}
