import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/userConstants";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { header: { "Content-type": "application/json" } };
    const { data } = await axios.post(
      "/api/n1/login",
      { email, password },
      config
    );
    dispatch(loginSuccess(data.user));
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
  }
};
