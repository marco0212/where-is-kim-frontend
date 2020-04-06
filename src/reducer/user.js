import { UPDATE_USER } from "../constants";

const initialState = {
  id: "",
  username: "",
  email: "",
  allIds: [],
  teamById: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { _id, username, email, teams } = action.payload;
      const allIds = teams.map((team) => team._id);
      const teamById = teams.reduce((acc, team) => {
        const {
          participants,
          admins,
          threads,
          records,
          _id,
          name,
          display_name,
          created_by,
          location,
          work_on_time,
          work_off_time,
        } = team;

        acc[team._id] = {
          participants,
          admins,
          threads,
          records,
          id: _id,
          name,
          displayName: display_name,
          createdBy: created_by,
          location,
          workOnTime: work_on_time,
          workOffTime: work_off_time,
        };
        return acc;
      }, {});

      return {
        ...state,
        id: _id,
        username,
        email,
        allIds,
        teamById,
      };

    default:
      return {
        ...state,
      };
  }
}
