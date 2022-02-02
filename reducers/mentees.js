import { handleActions } from "redux-actions";
import {
  requestMentees,
  requestMenteesSuccess,
  requestMenteesFailed,
} from "../actions/mentees";

const FetchState = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
};

const initialState = {
  fetchState: FetchState.NOT_FETCHED,
  error: null,
  name: "",
  colegio: "",
  foto: "",
  asignado: "",
 
};

export default handleActions(
  {
    [requestMentees]: (state) => ({
      ...state,
      fetchState: FetchState.FETCHING,
    }),
    [requestMenteesSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
      fetchState: FetchState.FETCHED,
    }),
    [requestMenteesFailed]: (state, { payload }) => ({
      ...state,
      fetchState: FetchState.FETCHED,
      error: payload,
    }),
  },
  initialState
);