import { LOGIN_SUCCESS } from "../constants/userConstants";

const initialState = { user: null, isAuthenticated: false };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    default:
      return state;
  }
};
