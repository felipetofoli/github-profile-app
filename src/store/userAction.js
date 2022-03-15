import Constants from "./constants";

export const changeUser = (user) => {
    return {
        type: Constants.User.Set,
        payload: user,
    };
};