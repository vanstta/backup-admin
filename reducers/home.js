import { handleActions } from "redux-actions";
import {
  requestHomeSuccess,
  requestHomeFailed,
  requestHome,
} from "../actions/home";

const FetchState = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
};

const initialState = {
  fetchState: FetchState.NOT_FETCHED,
  error: null,
  title: "",
  subTitle: "",
  infoProposal: [],
  sectionBanner: [],
  info: "",
  slogan: "",
  programs: [],
  footerSubmenu: [],
  contact: [],
  sectionMission: {
    title: "",
    text: "",
    subTitle: "",
    list: [],
  },
};

export default handleActions(
  {
    [requestHome]: (state) => ({
      ...state,
      fetchState: FetchState.FETCHING,
    }),
    [requestHomeSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
      fetchState: FetchState.FETCHED,
    }),
    [requestHomeFailed]: (state, { payload }) => ({
      ...state,
      fetchState: FetchState.FETCHED,
      error: payload,
    }),
  },
  initialState
);
