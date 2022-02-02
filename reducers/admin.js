import { handleActions } from "redux-actions";
import {
  requestAdmin,
  requestAdminSuccess,
  requestAdminFailed,
} from "../actions/admin";

const FetchState = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
};

const initialState = {
  fetchState: FetchState.NOT_FETCHED,
  error: null,
  name: "",
  gender: "",
  positionF: "",
  email: "",
  cell: "",
  linkedin: "",
  picture: "",
  username: "",
  password: ""
 
};

export default handleActions(
  {
    [requestAdmin]: (state) => ({
      ...state,
      fetchState: FetchState.FETCHING,
    }),
    [requestAdminSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
      fetchState: FetchState.FETCHED,
    }),
    [requestAdminFailed]: (state, { payload }) => ({
      ...state,
      fetchState: FetchState.FETCHED,
      error: payload,
    }),
  },
  initialState
);