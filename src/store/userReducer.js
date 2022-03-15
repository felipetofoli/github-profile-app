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
      return {
        ...state,
        username: action.payload.username,
        name: action.payload.name,
        avatar: action.payload.avatar,
        publicReposQuantity: action.payload.publicReposQuantity,
      };
    case Constants.User.Reset:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
