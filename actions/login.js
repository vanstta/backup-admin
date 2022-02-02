import { createAction } from "redux-actions";
import { api } from "../config/networkConfig";

export const clearToken = createAction("CLEAR_TOKEN");
export const requestLogin = createAction("REQUEST_LOGIN");
export const requestLoginSuccess = createAction("REQUEST_LOGIN_SUCCESS");
export const requestLoginFailed = createAction("REQUEST_LOGIN_FAILED");

export const logIn = (userName, password) => async (dispatch, getState) => {
  dispatch(requestLogin());
  try {
    /*
    Manera de ejecutar una request con thunk + axios
    const response = await api.get("/login", {
      params: {
        userName,
        password,
      },
    });
    dispatch(requestLoginSuccess(response.data));*/
    dispatch(requestLoginSuccess({ userName, password }));
  } catch (error) {
    dispatch(requestLoginFailed(error.message));
  }
};
