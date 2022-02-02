import { createAction } from "redux-actions";
import { api } from "../config/networkConfig";

export const requestMentees = createAction("REQUEST_MENTEES_FETCHING");
export const requestMenteesSuccess = createAction("REQUEST_MENTEES_SUCCESS");
export const requestMenteesFailed = createAction("REQUEST_MENTEES_FAILED");

export const mentees = () => async (dispatch) => {
  dispatch(requestMentees());
  try {
    
    const response = await api.get(
      "https://www.mockachino.com/75230b61-9253-48/users"
    );

    dispatch(requestMenteesSuccess(response.data));
  } catch (error) {
    dispatch(requestMenteesFailed(error.message));
  }
};