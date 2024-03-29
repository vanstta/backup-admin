import { createAction } from "redux-actions";
import { api } from "../config/networkConfig";

export const requestAdmin = createAction("REQUEST_ADMIN_FETCHING");
export const requestAdminSuccess = createAction("REQUEST_ADMIN_SUCCESS");
export const requestAdminFailed = createAction("REQUEST_ADMIN_FAILED");

export const admin = () => async (dispatch, getState) => {
  dispatch(requestAdmin());
  try {
    const response = await api.get(
      "https://www.mockachino.com/88936805-ec18-4f/users"
    );

    dispatch(requestAdminSuccess(response.data));
  } catch (error) {
    dispatch(requestAdminFailed(error.message));
  }
};
