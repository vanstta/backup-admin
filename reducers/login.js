import { handleActions } from "redux-actions";
import {
  clearToken,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailed,
} from "../actions/login";

const FetchState = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
};

const initialState = {
  fetchState: FetchState.NOT_FETCHED,
  userName: "",
  password: "",
  userToken: "fake-token", //This is a fake token which will be replaced by the real one, in addition is getting in use in the axios interceptor
  error: null,
};

export default handleActions(
  {
    [clearToken]: (state) => ({ ...state, userToken: initialState.userToken }),
    [requestLogin]: (state) => ({
      ...state,
      fetchState: FetchState.FETCHING,
      error: initialState.error,
    }),
    [requestLoginSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
      fetchState: FetchState.FETCHED,
    }),
    [requestLoginFailed]: (state, { payload }) => ({
      ...state,
      fetchState: FetchState.FETCHED,
      error: payload,
    }),
  },
  initialState
);
