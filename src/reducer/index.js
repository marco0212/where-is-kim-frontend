import { combineReducers } from "redux";
import user from "./user";
import team from "./team";
import ui from "./ui";

export default combineReducers({
  user,
  team,
  ui,
});
