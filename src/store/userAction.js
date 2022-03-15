import Constants from "./constants";

export const changeUsername = (usernameText) => {
    return {
        type: Constants.User.SetUsername,
        payload: usernameText,
    };
};