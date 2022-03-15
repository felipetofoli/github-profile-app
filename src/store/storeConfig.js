import { createStore, combineReducers } from "redux";

import UserReducer from "./userReducer";

const reducers = combineReducers({
    user: UserReducer,
});

const store = createStore(reducers);

export default store;