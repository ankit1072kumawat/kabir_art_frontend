import { combineReducers } from "redux";
import { commonReducer } from "./commonReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import {adminUserReducer} from "./adminUserReducer"
import {profileReducer} from "./profileReducer"

const appReducer = combineReducers({
  commonReducer,
  authReducer,
  userReducer,
  profileReducer
});

let rootReducer = null;
export default rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};
