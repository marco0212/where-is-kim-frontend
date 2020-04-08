import { combineReducers } from "redux";
import status from "./status";
import user from "./user";
import team from "./team";

export default combineReducers({
  status,
  user,
  team,
});
