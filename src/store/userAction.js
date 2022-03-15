import Constants from "./constants";

export const changeUser = (user) => {
  return {
    type: Constants.User.Set,
    payload: user,
  };
};

export const resetUser = () => {
  return {
    type: Constants.User.Reset,
    payload: {},
  };
};
