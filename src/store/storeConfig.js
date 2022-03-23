import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import UserReducer from "./User/UserCreators";
import SagaConfig from "./sagaConfig";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    user: UserReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(SagaConfig);

export default store;