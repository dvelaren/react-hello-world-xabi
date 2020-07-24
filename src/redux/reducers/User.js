import { UPDATE_USER_NAME, UPDATE_USER_STATUS } from "../actions";

const initialState = {
  name: "",
  status: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      const name = action.name;
      return { ...state, name };

    case UPDATE_USER_STATUS:
      const status = action.status;
      return { ...state, status };

    default:
      return state;
  }
};

export default userReducer;
