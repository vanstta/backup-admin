import { createAction } from "redux-actions";
import { api } from "../config/networkConfig";

export const requestHome = createAction("REQUEST_HOME_FETCHING");
export const requestHomeSuccess = createAction("REQUEST_HOME_SUCCESS");
export const requestHomeFailed = createAction("REQUEST_HOME_FAILED");

export const home = () => async (dispatch, getState) => {
  dispatch(requestHome());
  try {
    // Manera de ejecutar una request con thunk + axios
    const response = await api.get(
      "https://run.mocky.io/v3/061e548d-76f3-48c2-973f-a8635d720898"
    );

    dispatch(requestHomeSuccess(response.data));
  } catch (error) {
    dispatch(requestHomeFailed(error.message));
  }
};
