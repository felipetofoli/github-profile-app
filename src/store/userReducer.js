import Constants from "./constants";

const INITIAL_STATE = {
  username: "",
  name: "",
  avatar: "",
  publicReposQuantity: 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.User.Set:
      const { payload } = action;
      return {
        ...payload,
      };
    case Constants.User.Reset:
      return state;
    default:
      return state;
  }
};

export default userReducer;
