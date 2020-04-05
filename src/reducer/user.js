import { UPDATE_USER } from "../constants";

const initialState = {
  username: '',
  email: '',
  allTeams: [],
  teamById: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { username, email, teams } = action.payload;
      const allTeams = teams.map(team => team.id);
      const teamById = teams.reduce((acc, team) => {
        acc[team.id] = team;
        return acc;
      }, {});

      return {
        ...state,
        username,
        email,
        allTeams,
        teamById
      };
      
    default:
      return {
        ...state
      };
  }
}