import { combineReducers } from "redux";
import login from "./login";
import home from "./home";
import admin from "./admin";

const allReducers = combineReducers({
  login,
  home,
  admin,
});

/**
 * Exports a root reducer on top of the App Reducer to be able to reset it's
 * state to its initial (i.e. when the user logs out)
 * @param state
 * @param action
 * @returns {any}
 */
export default (state, action) => {
  return allReducers(state, action);
};
