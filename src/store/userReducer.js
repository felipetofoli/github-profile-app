const INITIAL_STATE = {
    username: "No username",
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "user/setUsername": // TODO: add constant
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;