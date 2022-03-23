import Constants from "../constants";

const INITIAL_STATE = {
    username: "",
    name: "",
    avatar: "",
    publicReposQuantity: 0,
};

const UserReducer = (state = INITIAL_STATE, action) => {
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

export const changeUser = (user) => {
    return {
        type: Constants.User.Set,
        payload: user,
    };
};

export const resetUser = () => {
    return {
        type: Constants.User.Reset,
    };
};

export const fetchUser = (username) => ({
    type: Constants.User.Fetch,
    payload: username,
});

export default UserReducer;
