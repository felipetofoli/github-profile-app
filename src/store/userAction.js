export const changeUsername = (usernameText) => {
    return {
        type: "user/setUsername", // TODO: add constant
        payload: usernameText,
    };
};