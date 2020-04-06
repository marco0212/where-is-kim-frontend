import { UPDATE_USER } from "../constants";

const initialState = {
  id: "",
  username: "",
  email: "",
  allTeams: [],
  teamById: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { _id, username, email, teams } = action.payload;
      const allTeams = teams.map((team) => team._id);
      const teamById = teams.reduce((acc, team) => {
        acc[team._id] = team;
        return acc;
      }, {});

      return {
        ...state,
        id: _id,
        username,
        email,
        allTeams,
        teamById,
      };

    default:
      return {
        ...state,
      };
  }
}
