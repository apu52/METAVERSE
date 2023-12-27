import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/userConstants";

export const loginuser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/n1/login",
      { email, password },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = { header: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post("/api/n1/register", formData, config);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.message,
    });
  }
};
