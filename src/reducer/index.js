import { combineReducers } from "redux";
import status from "./status";
import user from "./user";
import team from "./team";
import ui from "./ui";

export default combineReducers({
  status,
  user,
  team,
  ui,
});
